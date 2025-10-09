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
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSetupFormSchema, UserSetupFormType } from "../validation";

const progressState = [
  { name: "Personal Details", no: "1" },
  { name: "Health History", no: "2" },
  { name: "Insurance Information", no: "3" },
];

export default function UserSetup() {
  const [currentStep, setCurrentStep] = useState(2);
  const form = useForm({
    resolver: zodResolver(userSetupFormSchema),
  });

  const handleNextStep = async () => {
    if (currentStep === 3) return;
    if (currentStep < progressState.length) {
      let fieldsToValidate: (keyof UserSetupFormType)[] = [];
      if (currentStep === 1) {
        fieldsToValidate = [
          "fullName",
          "phone",
          "email",
          "dateOfBirth",
          "address",
          "zipCode",
        ];
      } else if (currentStep === 2) {
        fieldsToValidate = ["healthHistory", "reason"];
      } else {
        fieldsToValidate = ["insuranceProvider", "policyNumber"];
      }

      const isStepValid = await form.trigger(fieldsToValidate);
      if (isStepValid) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 1) return;
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = (data: any) => {
    if (currentStep < 3) handleNextStep();

    console.log(data);
  };

  return (
    <Card className=" absolute bg-background top-10 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-1/2 w-[90%] md:w-full md:max-w-6xl z-30 gap-0 md:gap-6">
      <CardHeader className=" md:gap-6 ">
        <CardTitle className=" text-center text-4xl">
          Information Form
        </CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-col md:flex-row md:gap-8">
        <div className="md:bg-[#727EFF1A] flex items-center justify-between md:block w-full rounded-[18px] p-8 md:w-[40%]">
          {progressState.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-10 cursor-pointer"
            >
              <p
                className={`${
                  currentStep >= index + 1 ? "bg-primary" : "bg-muted"
                } flex justify-center items-center text-center text-[18px] rounded-full w-[35px] h-[35px] text-white`}
              >
                {item.no}
              </p>
              <p
                className={` ${
                  currentStep >= index + 1 ? " text-primary" : ""
                } text-xl hidden md:flex `}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" w-full flex flex-col justify-between"
          >
            {currentStep === 1 && <PersonalSetup form={form} />}

            {currentStep === 2 && <HealthHistorySetup form={form} />}

            {currentStep === 3 && <InsuranceSetup form={form} />}

            <div className="flex justify-between w-full mt-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className=" cursor-pointer"
              >
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
