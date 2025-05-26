// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-light-blue text-light-blue text-sm text-center py-6">
      <p>
        Made with 💻 by{" "}
        <span className="text-lemon-green font-semibold">Joskua</span>
      </p>
      <p className="mt-1">
        Want the short version?{" "}
        <a
          href="/CV_Joskua_Olivares.pdf"
          className="underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download my CV
        </a>{" "}
        or{" "}
        <a
          href="mailto:joskua.olivares@gmail.com"
          className="underline hover:text-white"
        >
          Email me directly
        </a>
      </p>
    </footer>
  );
}
