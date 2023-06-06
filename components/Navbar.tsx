"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setToggle(!toggle);
  };

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
      <div className="lg:hidden" onClick={handleToggle}>
        {toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#2cb67d"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#2cb67d"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
        <div
          className={
            toggle
              ? "absolute top-16 items-center gap-5 lg:hidden right-0 bg-[#16161a] rounded-xl border-2 shadow-2xl border-[#2cb67d] flex flex-col p-4 ease-in-out duration-500"
              : "right-[-100%] top-16 absolute ease-in-out duration-500 p-4 gap-5 flex flex-col items-center"
          }
        >
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
    </div>
  );
}
