import AnimeCard from "@/components/AnimeCard";
import React from "react";

type Params = {
  slug?: string;
};

async function getGenre({ params }: { params: Params }) {
  const res = await fetch(
    `https://otakudesu-unofficial-api.rzkfyn.tech/api/v1/genres/${params.slug}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  console.log(data.data);

  return data.data.anime;
}

export default async function page({ params }: { params: Params }) {
  const genre = await getGenre({ params });
  return (
    <div className="max-w-[1170px] mx-auto px-4 lg:px-0">
      <AnimeCard anime={genre} title={`${params.slug?.toUpperCase()}`} />
    </div>
  );
}
