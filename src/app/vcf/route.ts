import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const vcfPath = path.join(process.cwd(), "public", "joskua.vcf");

export async function GET() {
  try {
    const vcf = await readFile(vcfPath);

    return new Response(vcf, {
      headers: {
        "Content-Type": "text/vcard",
        "Content-Disposition": 'attachment; filename="Joskua_Olivares.vcf"',
      },
    });
  } catch (error) {
    console.error("Unable to read VCF asset:", error);

    return Response.json(
      { error: "Contact card unavailable" },
      { status: 500 },
    );
  }
}
