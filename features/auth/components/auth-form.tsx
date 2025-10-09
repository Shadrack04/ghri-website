"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { icons } from "@/constants/icons";
import Image from "next/image";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { paths } from "@/constants/paths";
import CustomRadioInput from "./custom-radio";

const registerRadioData = [
  {
    value: "patience",
    label: "Patience",
  },
  {
    value: "doctor",
    label: "Doctor",
  },
];

type AuthFormProps = {
  type: "register" | "login";
  onSubmit?: () => void;
};

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
  const form = useForm();
  return (
    <Card className=" absolute bg-background right-1/2 translate-x-1/2 md:translate-x-0 top-1/2 md:right-8 md:-translate-y-1/2 w-[90%] md:w-full md:max-w-lg z-30">
      <CardHeader className=" gap-6 ">
        <CardTitle className=" text-center text-4xl">
          {type === "register" ? "Create Account" : "Login"}
        </CardTitle>
        <CardDescription className=" flex flex-col px-0 items-center gap-4">
          <div className=" flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between w-full">
            <Button variant={"outline"} className=" py-6">
              <Image src={icons.authGoogleIcon} alt="" className=" size-6" />
              Sign up with Google
            </Button>
            <Button variant={"outline"} className=" py-6">
              <Image src={icons.authFacebookIcon} alt="" className=" size-6" />
              Sign up with Facebook
            </Button>
          </div>

          <h1 className=" text-foreground text-xl">OR</h1>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form>
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-muted">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Email"
                        {...field}
                        className=" py-6 px-4 border-2 border-[#E5E7EB]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-muted">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="*********"
                        {...field}
                        className=" bg-none py-6 px-4 border-2 border-[#E5E7EB]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {type === "register" && (
              <div className=" py-2 flex flex-col gap-2">
                <p className=" text-lg text-muted">
                  what are you registering as
                </p>
                <CustomRadioInput
                  name="registeringAs"
                  control={form.control}
                  radioArray={registerRadioData}
                />
              </div>
            )}

            <div className="flex justify-center w-full mt-4">
              <Button type="submit" className="">
                {type === "register" ? "Create Account" : "Login"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className=" justify-center">
        <p>
          {type === "register"
            ? "Already have and account?"
            : "Don't have an account?"}

          <Link
            href={paths.auth[type == "register" ? "login" : "signup"]}
            className=" text-primary"
          >
            {type === "register" ? "Login" : "Signup"}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
