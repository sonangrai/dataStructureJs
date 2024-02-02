import Link from "next/link";

function Header() {
  return (
    <header className="border-b-2">
      <div className="container py-2 mx-auto">
        <Link href="/" className="font-bold text-blue-600">
          DSA/JS
        </Link>
      </div>
    </header>
  );
}

export default Header;
