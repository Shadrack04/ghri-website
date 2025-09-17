import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<any>;
};

export default function InsuranceSetup({ form }: Props) {
  return (
    <div className=" w-full">
      <div className=" grid grid-cols-2 gap-8">
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
      </div>
    </div>
  );
}
