"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { icons } from "@/constants/icons";
import Image from "next/image";
import RegisterRadio from "./register-radio";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function AuthForm() {
  const form = useForm();
  return (
    <Card className=" absolute bg-background top-1/2 right-8 -translate-y-1/2 w-full max-w-lg">
      <CardHeader className=" gap-6 ">
        <CardTitle className=" text-center text-4xl">Create Account</CardTitle>
        <CardDescription className=" flex flex-col px-0 items-center gap-4">
          <div className=" flex justify-between w-full">
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
            <div className=" py-2 flex flex-col gap-2">
              <p className=" text-lg text-muted">what are you registering as</p>
              <RegisterRadio />
            </div>

            <div className="flex justify-center w-full mt-4">
              <Button type="submit" className="">
                Create Account
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className=" justify-center">
        <p>
          Already have and account?{" "}
          <Link href="#" className=" text-primary">
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
