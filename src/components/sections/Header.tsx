import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 px-6 py-4 flex items-center justify-between z-50 bg-deep-blue">
      <img src="/joskuaBanner.svg" alt="Joskua logo" className="h-10 w-auto" />

      <div
        aria-label="Language selector"
        className="flex items-center gap-3 text-sm"
      >
        <Link href="/en" className="flex items-center gap-3 hover:opacity-80">
          <img src="/us-flag.png" alt="US flag" className="h-6 w-6" />
          <span>EN</span>
        </Link>

        <span className="opacity-50">|</span>

        <Link href="/es" className="flex items-center gap-3 hover:opacity-80">
          <img src="/mexico-flag.png" alt="Mexico flag" className="h-6 w-6" />
          <span>ES</span>
        </Link>
      </div>
    </header>
  );
}
