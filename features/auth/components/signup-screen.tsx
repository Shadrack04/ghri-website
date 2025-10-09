import React from "react";
import AuthForm from "./auth-form";
import Image from "next/image";
import { images } from "@/constants/image";
import UserSetup from "./user-setup";

export default function SignupScreen() {
  return (
    <div className=" relative w-full">
      <Image src={images.signupBg} alt="" className=" " />
      {/* <AuthForm type="register" /> */}
      <UserSetup />
    </div>
  );
}
