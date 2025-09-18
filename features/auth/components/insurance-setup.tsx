"use client";

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
      <div className=" grid grid-cols-2 gap-8 mb-8">
        <FormField
          control={form.control}
          name="insuranceProvider"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-muted">Insurance Provider</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter full details"
                  {...field}
                  className=" py-6 px-4 border-2 border-[#E5E7EB]"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="policyNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-muted">Policy Number</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="e.g 1234567890"
                  {...field}
                  className=" py-6 px-4 border-2 border-[#E5E7EB]"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className=" w-sm">
        <FormField
          control={form.control}
          name="policyDoc"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-muted">
                Please upload the policy doc
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  placeholder="e.g 1234567890"
                  {...field}
                  className=" border-2 w-[8rem] border-[#E5E7EB]"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
