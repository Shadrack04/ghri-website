import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RadioArrayType } from "../type/type";
import { cn } from "@/lib/utils";

type CustomRadioInputProps = {
  radioArray: RadioArrayType[];
  className?: string;
};

export default function CustomRadioInput({
  radioArray,
  className,
}: CustomRadioInputProps) {
  return (
    <RadioGroup
      defaultValue=""
      className={cn(" flex gap-3 text-muted", className)}
    >
      {radioArray?.map((radio) => (
        <div key={radio.value} className="flex items-center gap-2">
          <RadioGroupItem
            value={radio.value}
            id="r1"
            className=" border-primary"
          />
          <Label htmlFor="r1">{radio.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
