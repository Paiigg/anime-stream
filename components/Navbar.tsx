import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container flex items-center justify-between px-4 py-3 mx-auto">
      <Link href="/" className="text-4xl font-bold">
        Nimeflix
      </Link>
      <div className="w-80">
        <input
          type="text"
          placeholder="Search a anime"
          className="py-2 px-4 bg-[#374151] focus:outline-none w-full rounded-full hidden lg:block"
        />
      </div>
    </div>
  );
}
