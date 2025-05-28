# 🧠 Joskua.dev — Personal Portfolio Site

This is the personal portfolio of **Joskua**, a full-stack developer based in Mexico City. The project showcases not only my work but also my technical capabilities across modern frontend and backend technologies.

---

## 🔧 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
  - Uses theming and utility-first design
- **3D Graphics**: [Three.js](https://threejs.org/) via [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/)
  - Custom extruded `J` logo created in Blender from SVG
- **Language**: TypeScript (strictly across all components)
- **Email Delivery**: [Resend](https://resend.com/)
  - Contact form powered by serverless Vercel API route (`/api/contact`)
  - Validated DNS, DKIM, SPF, and MX records
- **DNS & SSL**: [Cloudflare](https://cloudflare.com/)
  - DNS hosting, proxying, and SSL management

---

## 🚀 Hosting & Deployment

- **Hosted On**: [Vercel](https://vercel.com/)
  - CI/CD with GitHub integration
  - Auto-deploy on push to `main`
- **Domain**: [joskua.space](https://www.joskua.space/)
- **Environment Variables**:
  - Securely managed in Vercel dashboard for API keys

---

## 🎯 Purpose & Message

This site is built to present myself as a **hireable**, **independent**, and **technically capable** developer. It aims to communicate:

> “I can take a project from idea to production — cleanly, creatively, and completely solo if needed.”

- Designed from scratch, no template used
- Responsive layout (Tailwind handles breakpoints)
- Highlights innovation through simple 3D & animations

---

## ✉️ Contact Form

- Submits data through a secure Vercel Edge Function
- Uses the Resend API to email submissions
- Spam protection handled by Resend
- No data stored on the backend

---

## 🧪 Notable Technical Aspects

✅ App Router + Server Components (Next.js)  
✅ Tailwind v4 + Theme customization  
✅ 3D + Blender workflow integration  
✅ Environment-based behavior  
✅ DNS troubleshooting and Cloudflare migration  
✅ Deployment via Vercel GitHub CI
