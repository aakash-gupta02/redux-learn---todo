"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <>
      <nav className=" p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Home
        </Link>
        <div className="flex space-x-4">
          <Link href="/about" className="text-lg">
            About
          </Link>
          <Link href="/services" className="text-lg">
            Services
          </Link>
          <Link href="/contact" className="text-lg">
            Contact
          </Link>
        </div>
        <Button onClick={() => alert("Button clicked!")}>
          Click me
        </Button>
      </nav>
    </>
  );
};

export default Navbar;
