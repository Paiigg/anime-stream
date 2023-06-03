import Image from "next/image";
import banner from "@/public/banner.png";
import Realease from "@/components/Realease";

async function getAnime() {
  const res = await fetch(
    "https://otakudesu-unofficial-api.rzkfyn.tech/api/v1/home"
  );
  const data = await res.json();

  return data.data.ongoing_anime;
}

export default async function Home() {
  const anime = await getAnime();

  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="px-4 mt-10 lg:px-0">
        <h3 className="text-2xl font-semibold">Exlpore</h3>
        <p className="text-sm text-gray-400">
          What are you gonna watch today ?
        </p>
        <input
          type="text"
          placeholder="Search a anime"
          className="py-2 px-4 bg-[#374151] focus:outline-none w-full rounded-full mt-4 lg:hidden"
        />
        <Image
          src={banner}
          width={1170}
          height={300}
          alt="banner"
          className="mt-5 "
        />
      </div>
      <Realease anime={anime} />
    </div>
  );
}
