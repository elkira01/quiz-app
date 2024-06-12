import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='/page/user/register'>
        <Button>Register page</Button>
      </Link>
    </main>
  );
}
