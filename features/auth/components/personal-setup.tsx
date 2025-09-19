"use client";

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomRadioInput from "./custom-radio";
import { UseFormReturn } from "react-hook-form";

const genderData = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

type Props = {
  form: UseFormReturn<any>;
};

export default function PersonalSetup({ form }: Props) {
  return (
    <div className=" w-full">
      <div className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="fullName"
          rules={{
            required: "Full name is required",
          }}
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
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" grid grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="phone"
            rules={{
              required: "Phone number is required",
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-muted">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="+234"
                    {...field}
                    className=" bg-none py-6 px-4 border-2 border-[#E5E7EB]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            }}
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateOfBirth"
            rules={{
              required: "Date of Birth is required",
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-muted">Date of Birth</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="DD/MM/YYYY"
                    {...field}
                    className=" bg-none py-6 px-4 border-2 border-[#E5E7EB]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className=" flex flex-col justify-center gap-4">
            <p>Gender(optional)</p>

            <CustomRadioInput
              name="gender"
              control={form.control}
              radioArray={genderData}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            rules={{
              required: "Full name is required",
            }}
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            rules={{
              required: "Full name is required",
            }}
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
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
