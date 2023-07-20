import { useRouter } from "next/router";
import React from "react";

export default function CatchAllRoute() {
  const router = useRouter();
  return (
    <div>
      <h1>This is filter page: {router.query.user}</h1>
    </div>
  );
}
