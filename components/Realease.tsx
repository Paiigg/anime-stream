"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Realease({ anime }: { anime: any }) {
  const router = useRouter();
  return (
    <div className="px-4 mt-10 lg:px-0">
      <h3 className="text-2xl font-semibold">New Release</h3>
      <div className="grid content-center grid-cols-3 gap-4 mt-4 lg:grid-cols-6">
        {anime.map((data: any) => (
          <div
            onClick={() => router.push(`detail/${data.slug}`)}
            className="cursor-pointer"
          >
            <div className="relative rounded-lg bg-gradient-to-b from-gray-400">
              <Image
                src={data.poster}
                width={200}
                height={100}
                alt="poster"
                className="rounded-lg mix-blend-overlay"
              />
              <p className="absolute text-xs font-semibold bottom-3 left-3 lg:left-[50%] lg:translate-x-[-50%] ">
                {data.current_episode}
              </p>
            </div>
            <p className="py-2 text-xs lg:text-center lg:text-base">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
