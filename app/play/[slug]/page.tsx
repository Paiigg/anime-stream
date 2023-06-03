import React from "react";

type Params = {
  slug?: string | "";
};

export default function Play({ params }: { params: Params }) {
  return <div>{params.slug}</div>;
}
