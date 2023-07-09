import AnimeCard from "@/components/AnimeCard";
import React from "react";

type Params = {
  keyword?: string;
};

async function getSearch({ params }: { params: Params }) {
  const res = await fetch(
    `https://otakudesu-unofficial-api.rzkfyn.xyz/api/v1/search/${params.keyword}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data.data;
}

export default async function Search({ params }: { params: Params }) {
  const search = await getSearch({ params });
  return (
    <div className="max-w-[1170px] mx-auto px-4 lg:px-0 mt-20">
      <AnimeCard anime={search} title={""} />
    </div>
  );
}
