import Link from "next/link";

export function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b border-light-blue bg-deep-blue">
      <img src="/joskuaBanner.svg" alt="Joskua logo" className="h-10 w-auto" />
      <div className="flex gap-3">
        <Link href="/en">
          <span className="text-xl" role="img" aria-label="English">
            EN 🇺🇸
          </span>
        </Link>
        <span>|</span>
        <Link href="/es">
          <span className="text-xl" role="img" aria-label="Español">
            ES 🇲🇽
          </span>
        </Link>
      </div>
    </header>
  );
}
