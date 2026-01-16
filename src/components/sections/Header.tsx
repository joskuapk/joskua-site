import Link from "next/link";

export function Header() {
  return (
<header className="fixed top-0 left-0 w-full h-20 px-6 py-4 flex items-center justify-between z-50 bg-deep-blue">
      <img src="/joskuaBanner.svg" alt="Joskua logo" className="h-10 w-auto" />
      <div aria-label="Language selector" className="flex gap-3">
        <Link href="/en">
          <span className="" role="img" aria-label="English">
            EN
          </span>
        </Link>
        <span>|</span>
        <Link href="/es">
          <span className="" role="img" aria-label="Español">
            ES
          </span>
        </Link>
      </div>
    </header>
  );
}
