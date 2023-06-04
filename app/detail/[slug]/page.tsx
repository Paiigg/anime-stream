import EpisodeList from "@/components/EpisodeList";
import Image from "next/image";
import React from "react";

type Params = {
  slug?: string | "";
};

async function getDetail({ params }: { params: Params }) {
  const res = await fetch(
    `https://otakudesu-unofficial-api.rzkfyn.tech/api/v1/anime/${params.slug}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data.data;
}

export default async function Detail({ params }: { params: Params }) {
  const detail = await getDetail({ params });
  return (
    <div className="max-w-[1170px] mx-auto px-4 lg:px-0">
      <h3 className="text-2xl font-bold">{detail.title}</h3>
      <span className="text-xs text-yellow-400">{detail.japanese_title}</span>
      <div className="flex flex-col items-start justify-between lg:flex-row">
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <div className="flex justify-center lg:block ">
            <Image
              src={detail.poster}
              width={1000}
              height={100}
              alt="poster"
              className="rounded-lg"
            />
          </div>
          <div>
            <div className="flex">
              <div className="w-[200px]">
                <p>Rating: </p>
                <span className="text-xs text-zinc-500">{detail.rating}</span>
                <p>Produser: </p>
                <span className="text-xs text-zinc-500 ">
                  {detail.produser}
                </span>
                <p>Type: </p>
                <span className="text-xs text-zinc-500">{detail.type}</span>
                <p>Status: </p>
                <span className="text-xs text-zinc-500">{detail.status}</span>
              </div>
              <div>
                <p>Total Episode: </p>
                <span className="text-xs text-zinc-500">
                  {detail.episode_count}
                </span>
                <p>Durasi: </p>
                <span className="text-xs text-zinc-500">{detail.duration}</span>
                <p>Release: </p>
                <span className="text-xs text-zinc-500">
                  {detail.release_date}
                </span>
                <p>Studio: </p>
                <span className="text-xs text-zinc-500">{detail.studio}</span>
              </div>
            </div>
            <h3>Synopsis :</h3>
            <p className="text-xs text-zinc-500 lg:w-[90%] ">
              {detail.synopsis}
            </p>
          </div>
        </div>
      </div>
      <EpisodeList episode={detail.episode_lists} />
    </div>
  );
}
