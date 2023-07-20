import React from "react";
import RootLayout from "../components/Layouts/RootLayout";

export default function Home() {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
