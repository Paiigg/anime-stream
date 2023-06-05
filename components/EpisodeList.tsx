import React from "react";
import Link from "next/link";

export default function EpisodeList({ episode }: { episode: any[] }) {
  const reversed = [...episode].reverse();
  return (
    <div className="w-full mb-5">
      <h3 className="my-4 text-2xl font-semibold">Episode</h3>
      <div className="h-[500px]  border-b overflow-y-scroll overflow-x-hidden  scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        <div className="flex flex-col w-full">
          {reversed.map((data, i) => (
            <Link
              href={`play/${data.slug}`}
              className="bg-[#374151] rounded-full px-4 py-2 mb-4 text-sm w-full truncate"
            >
              {data.episode}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
