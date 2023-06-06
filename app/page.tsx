import Image from "next/image";
import banner from "@/public/banner.png";
import AnimeCard from "@/components/AnimeCard";
import SearchBar from "@/components/SearchBar";

async function getAnime() {
  const res = await fetch(
    "https://otakudesu-unofficial-api.rzkfyn.tech/api/v1/home",
    { cache: "no-store" }
  );
  const data = await res.json();

  return data.data.ongoing_anime;
}

export default async function Home() {
  const anime = await getAnime();

  return (
    <div className="max-w-[1170px] mx-auto mt-20">
      <div className="px-4 mt-10 lg:px-0">
        <h3 className="text-2xl font-semibold">Exlpore</h3>
        <p className="text-sm text-gray-400">
          What are you gonna watch today ?
        </p>
        <SearchBar props={"lg:hidden block my-4"} />
        <Image
          src={banner}
          width={1170}
          height={300}
          alt="banner"
          className="mt-5 "
        />
      </div>
      <AnimeCard anime={anime} title={"New Release"} />
    </div>
  );
}
