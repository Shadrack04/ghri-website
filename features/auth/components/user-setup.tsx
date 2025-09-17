"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";

import HealthHistorySetup from "./health-history-setup";
import { Form } from "@/components/ui/form";
import PersonalSetup from "./personal-setup";
import InsuranceSetup from "./insurance-setup";

const progressState = [
  { name: "Personal Details", no: "1" },
  { name: "Health History", no: "2" },
  { name: "Insurance Information", no: "3" },
];

const progress = undefined;

export default function UserSetup() {
  const form = useForm();
  return (
    <Card className=" absolute bg-background top-1/2 left-1/2 -translate-1/2 w-full max-w-6xl z-30">
      <CardHeader className=" gap-6 ">
        <CardTitle className=" text-center text-4xl">
          Information Form
        </CardTitle>
      </CardHeader>
      <CardContent className=" flex gap-8">
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
            {/* <PersonalSetup form={form} /> */}
            {/* <HealthHistorySetup form={form} /> */}
            <InsuranceSetup form={form} />
          </form>
        </Form>
      </CardContent>
      <CardFooter className=" justify-center"></CardFooter>
    </Card>
  );
}
