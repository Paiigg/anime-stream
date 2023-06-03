import React from "react";
import Link from "next/link";

export default function EpisodeList({ episode }: { episode: any[] }) {
  console.log({ episode });
  return (
    <div className="lg:w-[450px] w-full">
      <h3 className="my-4 text-2xl font-semibold">Episode</h3>
      <div className="flex flex-col">
        {episode.map((data) => (
          <Link
            href={`play/${data.slug}`}
            className="bg-[#374151] rounded-full px-4 py-2 mb-4 text-sm "
          >
            {data.episode}
          </Link>
        ))}
      </div>
    </div>
  );
}
