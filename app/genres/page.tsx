import React from "react";
import Link from "next/link";

async function getGenres() {
  const res = await fetch(
    "https://otakudesu-unofficial-api.rzkfyn.tech/api/v1/genres",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data;
}

export default async function Genres() {
  let randomColor = require("randomcolor"); // import the script
  let color: string = randomColor({ hue: "green", count: 36 }); // a hex code for an attractive color

  const genres = await getGenres();
  return (
    <div className="max-w-[1170px] mx-auto px-4 lg:px-0 ">
      <div className="grid w-full grid-cols-3 gap-5 lg:grid-cols-6">
        {genres.map((data: any, i: any) => {
          return (
            <div
              className="h-[100px]  rounded-xl flex items-center justify-center hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: `${color[i]}` }}
            >
              <Link
                href={`/genres/${data.slug}`}
                className="p-2 text-xl font-semibold text-center truncate drop-shadow-lg shadow-black"
              >
                {data.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
