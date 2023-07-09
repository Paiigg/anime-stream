import EpisodeList from "@/components/EpisodeList";
import Synopsis from "@/components/Synopsis";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type Params = {
  slug?: string | "";
};

async function getDetail({ params }: { params: Params }) {
  const res = await fetch(
    `https://otakudesu-unofficial-api.rzkfyn.xyz/api/v1/anime/${params.slug}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data.data;
}

export default async function Detail({ params }: { params: Params }) {
  const detail = await getDetail({ params });

  return (
    <div className="max-w-[1170px] mx-auto px-4 lg:px-0 mt-20">
      <div className="grid w-full grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <h3 className="text-2xl font-bold">{detail.title}</h3>
          <span className="text-xs text-[#2cb67d]">
            {detail.japanese_title}
          </span>
          <div className="flex flex-col items-start justify-between mt-4 lg:flex-row">
            <div className="grid grid-cols-1 lg:gap-10 lg:grid-cols-3">
              <Image
                src={detail.poster}
                width={1000}
                height={100}
                alt="poster"
                className="mb-4 rounded-lg"
              />

              <div className="col-span-2">
                <div className="flex">
                  <div className="w-[200px]">
                    <p>Rating: </p>
                    <span className="text-xs text-zinc-500">
                      {detail.rating}
                    </span>
                    <p>Produser: </p>
                    <span className="text-xs text-zinc-500 ">
                      {detail.produser}
                    </span>
                    <p>Type: </p>
                    <span className="text-xs text-zinc-500">{detail.type}</span>
                    <p>Status: </p>
                    <span className="text-xs text-zinc-500">
                      {detail.status}
                    </span>
                  </div>
                  <div>
                    <p>Total Episode: </p>
                    <span className="text-xs text-zinc-500">
                      {detail.episode_count}
                    </span>
                    <p>Durasi: </p>
                    <span className="text-xs text-zinc-500">
                      {detail.duration}
                    </span>
                    <p>Release: </p>
                    <span className="text-xs text-zinc-500">
                      {detail.release_date}
                    </span>
                    <p>Studio: </p>
                    <span className="text-xs text-zinc-500">
                      {detail.studio}
                    </span>
                  </div>
                </div>
                <h3>Synopsis :</h3>
                <Synopsis synopsis={detail.synopsis} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:block">
          <p className="my-4 text-xl font-semibold">Anime Recomendation</p>
          <div className="grid grid-cols-4 gap-4">
            {detail.recommendations.map((data: any, i: any) => (
              <Link href={`detail/${data.slug}`} key={i}>
                <Image
                  src={data.poster}
                  width={200}
                  height={100}
                  alt="poster"
                  className="rounded-lg"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <EpisodeList episode={detail.episode_lists} />
    </div>
  );
}
