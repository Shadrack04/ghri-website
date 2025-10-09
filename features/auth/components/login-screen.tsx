import React from "react";
import AuthForm from "./auth-form";
import Image from "next/image";
import { images } from "@/constants/image";

export default function LoginScreen() {
  return (
    <div className=" relative w-full">
      <Image src={images.loginBg} alt="" className=" " />
      <AuthForm type="login" />
    </div>
  );
}
