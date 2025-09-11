import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RegisterRadio() {
  return (
    <RadioGroup defaultValue="patient" className=" flex gap-3 text-muted">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="doctor" id="r1" />
        <Label htmlFor="r1">Doctor</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="patient" id="r2" />
        <Label htmlFor="r2">Patient</Label>
      </div>
    </RadioGroup>
  );
}
