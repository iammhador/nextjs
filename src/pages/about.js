import Link from "next/link";
import RootLayout from "../components/Layouts/RootLayout";

export default function About() {
  return (
    <div>
      <p>This is about page</p>
      <Link href="/" type="dashed">
        Go to home
      </Link>
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
