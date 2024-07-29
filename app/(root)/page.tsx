import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="">
      <h2 className="text-6xl">Dog Zone</h2>
      <SignedOut>
        <Link href="/sign-up">
          <Button>Hey you sign in now</Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default page;
