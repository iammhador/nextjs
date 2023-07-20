import { useRouter } from "next/router";
import React from "react";

export default function User() {
  const router = useRouter();

  return (
    <div>
      <h1>This is user: {router.query.user}</h1>
    </div>
  );
}
