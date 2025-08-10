import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen flex items-center justify-center gap-10 ">
      <div>
        Scribeo:
        <ModeToggle />
      </div>
      <Link href={"/sign-in"}>
        <Button variant={"ghost"} className="text-shadow-xs cursor-pointer">
          Sign in
        </Button>
      </Link>
      <Link href={"/sign-up"}>
        <Button variant={"ghost"} className="text-shadow-xs cursor-pointer">
          Sign up
        </Button>
      </Link>
      <Link href={"/scribe"}>
        <Button>Scribe</Button>
      </Link>
    </div>
  );
}
