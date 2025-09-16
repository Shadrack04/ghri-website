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
import { paths } from "@/constants/paths";
import { ArrowLeft } from "lucide-react";

type AuthFormProps = {
  type: "register" | "login";
  onSubmit?: () => void;
};

const progressState = [
  { name: "Personal Details", no: "1" },
  { name: "Health History", no: "2" },
  { name: "Insurance Information", no: "3" },
];
const progress = undefined;

export default function UserSetup({ type, onSubmit }: AuthFormProps) {
  const form = useForm();
  return (
    <Card className=" absolute bg-background top-1/2 left-1/2 -translate-1/2 w-full max-w-6xl z-30">
      <CardHeader className=" gap-6 ">
        <CardTitle className=" text-center text-4xl">
          Information Form
        </CardTitle>
      </CardHeader>
      <CardContent className=" flex gap-4">
        <div className="bg-[#727EFF1A] rounded-[18px] p-8 w-[40%]">
          {progressState.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-10 cursor-pointer"
            >
              <p
                className={`${
                  progress === item.name ? "bg-primary" : "bg-muted"
                } flex justify-center items-center text-center text-[18px] rounded-full w-[35px] h-[35px] text-white`}
              >
                {item.no}
              </p>
              <p className="text-[20px]">{item.name}</p>
            </div>
          ))}
        </div>

        <Form {...form}>
          <form className=" w-full">
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-muted">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Your Full name"
                        {...field}
                        className=" py-6 px-4 border-2 border-[#E5E7EB]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className=" grid grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-muted">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="+234"
                          {...field}
                          className=" bg-none py-6 px-4 border-2 border-[#E5E7EB]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-muted">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="e.g jamesjohnson@gmail.com"
                          {...field}
                          className=" bg-none py-6 px-4 border-2 border-[#E5E7EB]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-muted">
                        Date of Birth
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          placeholder="DD/MM/YYYY"
                          {...field}
                          className=" bg-none py-6 px-4 border-2 border-[#E5E7EB]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className=" flex flex-col justify-center gap-4">
                  <p>Gender</p>
                  <RegisterRadio />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-muted">Address</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your address"
                          {...field}
                          className=" bg-none py-6 px-4 border-2 border-[#E5E7EB]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-muted">Zip Code</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="e.g 100001"
                          {...field}
                          className=" bg-none py-6 px-4 border-2 border-[#E5E7EB]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {type === "register" && (
              <div className=" py-2 flex flex-col gap-2">
                <p className=" text-lg text-muted">
                  what are you registering as
                </p>
                <RegisterRadio />
              </div>
            )}

            <div className="flex justify-between w-full mt-4">
              <button>
                <ArrowLeft className=" size-8" />
              </button>
              <Button type="submit" className="">
                Next
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className=" justify-center"></CardFooter>
    </Card>
  );
}
