import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className=" p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Home</Link>
        <div className="flex space-x-4">
          <Link href="/about" className="text-lg">About</Link>
          <Link href="/services" className="text-lg">Services</Link>
          <Link href="/contact" className="text-lg">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
