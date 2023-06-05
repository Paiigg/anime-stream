import React from "react";

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
      <iframe
        allowFullScreen={true}
        allow="encypted-media"
        src={video.stream_url}
        className="w-full lg:h-[500px] h-[200px]"
      ></iframe>
    </div>
  );
}
