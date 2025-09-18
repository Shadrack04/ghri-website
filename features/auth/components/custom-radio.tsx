"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RadioArrayType } from "../type/type";
import { cn } from "@/lib/utils";
import { Control } from "react-hook-form";
import { FormField } from "@/components/ui/form";

type CustomRadioInputProps = {
  name: string;
  control: Control<any>;
  radioArray: RadioArrayType[];
  className?: string;
};

export default function CustomRadioInput({
  name,
  control,
  radioArray,
  className,
}: CustomRadioInputProps) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroup
          onValueChange={field.onChange}
          value={field.value}
          defaultValue=""
          className={cn(" flex gap-3 text-muted", className)}
        >
          {radioArray?.map((radio) => (
            <div key={radio.value} className="flex items-center gap-2">
              <RadioGroupItem
                value={radio.value}
                id={`${name}-${radio.value}`}
                className=" border-primary"
              />
              <Label htmlFor={`${name}-${radio.value}`}>{radio.label}</Label>
            </div>
          ))}
        </RadioGroup>
      )}
    />
  );
}
