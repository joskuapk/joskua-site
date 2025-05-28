// src/app/api/contact/route.ts
import verifyCaptcha from "@/lib/verify-captcha";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Received form data:", { name: body.name, email: body.email, message: body.message });

  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
    captchaToken: z.string().min(1),
  });

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ success: false, error: "Invalid form data" }, { status: 400 });
  }

  const { name, email, message, captchaToken } = result.data;

  const captchaVerified = await verifyCaptcha(captchaToken);
  console.log("Captcha verification result:", captchaVerified);
  if (!captchaVerified) {
    return NextResponse.json({ success: false, error: "Captcha failed" }, { status: 403 });
  }

  try {
    console.log("Sending email with Resend:", { name, email, message });
    const data = await resend.emails.send({
      from: "Contact Form <send@joskua.space>", // Replace with a domain you've verified in Resend
      to: "joskua.olivares@gmail.com", // Your destination email
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
You've received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send error:", error);
    console.log("Caught error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}