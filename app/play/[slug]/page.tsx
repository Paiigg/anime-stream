import React from "react";
import Link from "next/link";

type Params = {
  slug?: string | "";
};

async function getVideo({ params }: { params: Params }) {
  const res = await fetch(
    `https://otakudesu-unofficial-api.rzkfyn.tech/api/v1/episode/${params.slug}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data;
}

export default async function Play({ params }: { params: Params }) {
  const video = await getVideo({ params });
  return (
    <div className="max-w-[1170px] mx-auto px-4 lg:px-0">
      <h3 className="my-4 text-lg font-semibold lg:text-2xl">
        {video.episode}
      </h3>
      <iframe
        allowFullScreen={true}
        allow="encypted-media"
        src={video.stream_url}
        className="w-full lg:h-[500px] h-[200px]"
      ></iframe>
      <div className="bg-[#2cb67d] flex items-center justify-around my-4 text-center font-semibold py-2 text-xs lg:text-lg">
        <Link
          href={`/play/${video.previous_episode?.slug}`}
          className={
            video.has_previous_episode
              ? ""
              : "text-zinc-500 pointer-events-none"
          }
        >
          Prev Episode
        </Link>
        <Link href="/">...</Link>
        <Link
          href={`/play/${video.next_episode?.slug}`}
          className={video.has_next_episode ? "" : " pointer-events-none"}
        >
          Next Episode
        </Link>
      </div>
    </div>
  );
}
