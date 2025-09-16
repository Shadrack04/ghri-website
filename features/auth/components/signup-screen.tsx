import React from "react";
import AuthForm from "./auth-form";
import Image from "next/image";
import { images } from "@/constants/image";

export default function SignupScreen() {
  return (
    <div className=" relative  aspect-video w-full bg-amber-500">
      <Image src={images.signupBg} alt="" fill className=" " />
      <AuthForm />
    </div>
  );
}
