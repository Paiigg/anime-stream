"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="container sticky top-0 flex items-center justify-between px-4 py-3 mx-auto bg-[#16161a] z-50">
      <div className="flex items-center gap-20">
        <Link href="/" className="text-4xl font-bold">
          Nimeflix
        </Link>
        <div className="items-center hidden gap-5 lg:flex">
          <Link
            href="/"
            className={`${pathname === "/" ? "text-white" : "text-zinc-500"}`}
          >
            Home
          </Link>
          <Link
            href="/genres"
            className={`${
              pathname === "/genres" ? "text-white" : "text-zinc-500"
            }`}
          >
            Genres
          </Link>
        </div>
      </div>
      <SearchBar props={"hidden lg:block"} />
    </div>
  );
}
