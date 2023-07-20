import { useRouter } from "next/router";
import React from "react";

export default function ErrorPage() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div>
      <img
        src="https://st2.depositphotos.com/1521427/10369/v/450/depositphotos_103692402-stock-illustration-error-page-with-a-mountain.jpg"
        alt="Error"
        width="100%"
      />
    </div>
  );
}
