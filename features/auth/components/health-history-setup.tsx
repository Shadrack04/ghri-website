"use client";

import React from "react";
import CustomRadioInput from "./custom-radio";
import { healthHistoryRadioData } from "../data";

import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  form: UseFormReturn<any>;
};

export default function HealthHistorySetup({ form }: Props) {
  return (
    <div className=" w-full">
      <div className=" flex flex-col gap-2 mb-4">
        <h2 className=" text-2xl text-foreground font-medium">
          MEDICAL HISTORY
        </h2>
        <p className=" text-muted text-xl">
          Please check any of the following boxes that apply to you
        </p>
      </div>
      <CustomRadioInput
        name="healthHistory"
        control={form.control}
        radioArray={healthHistoryRadioData}
        className=" grid grid-cols-2 gap-6 w-[60%]"
      />
      <div className=" flex flex-col gap-2 my-8">
        <h2 className=" text-2xl text-foreground font-medium">
          REASON FOR CONSULTATION
        </h2>
        <p className=" text-muted text-xl">
          Describe your symptoms or reason for consultation
        </p>

        <FormField
          control={form.control}
          name="reason"
          rules={{
            required: "Reason for booking is required",
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-muted"></FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  {...field}
                  className=" bg-none py-6 px-4 border-2 h-32 border-[#E5E7EB]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
