import React from "react";
import AuthForm from "./auth-form";
import Image from "next/image";
import { images } from "@/constants/image";

export default function SignupScreen() {
  return (
    <div className=" relative min-h-screen">
      <Image src={images.signupBg} alt="" className=" object-contain" />
      <AuthForm />
    </div>
  );
}
