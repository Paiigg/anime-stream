"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({ props }: { props: string }) {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();

    router.push(`/search/${keyword}`);
    setKeyword("");
  };
  return (
    <form className="lg:w-80" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search a anime"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className={`py-2 px-4 bg-[#374151] focus:outline-none w-full rounded-full ${props}`}
      />
    </form>
  );
}
