import { Mail, MapPin, Smartphone } from "lucide-react";
import React from "react";

export default function ContactDetails() {
  return (
    <div className=" flex flex-col justify-center mx-auto">
      <div className=" flex flex-col gap-2 mb-8">
        <h1 className=" text-[3rem] text-foreground tracking-wide font-bold">
          Contact Us
        </h1>
        <p className="text-xl text-foreground">Reach out for collaboration</p>
      </div>

      <div className=" flex flex-col gap-8">
        <div className=" flex items-center gap-4">
          <Mail className=" text-primary" />
          <div>
            <h3 className=" text-xl text-foreground">Email us</h3>
            <p className=" text-muted">contact@healthcare.com</p>
          </div>
        </div>
        <div className=" flex items-center gap-4">
          <Smartphone className=" text-primary" />
          <div>
            <h3 className=" text-xl text-foreground">Call us</h3>
            <p className=" text-muted">+234 123 4567</p>
          </div>
        </div>
        <div className=" flex items-center gap-4">
          <MapPin className=" text-primary" />
          <div>
            <h3 className=" text-xl text-foreground">Visit us</h3>
            <p className=" text-muted">123 Health St, Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}
