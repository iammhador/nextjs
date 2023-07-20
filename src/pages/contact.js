import { Button } from "antd";
import Link from "next/link";

export default function contact() {
  return (
    <div>
      <p>This is contact page</p>
      <Button>
        <Link href="/" type="primary">
          Go to home
        </Link>
      </Button>
    </div>
  );
}
