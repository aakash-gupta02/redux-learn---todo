import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products/shoes" className="text-white hover:underline">
            shoes
          </Link>
        </li>
        <li>
          <Link href="/products/phone" className="text-white hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
