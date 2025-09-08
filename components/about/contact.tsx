import React from "react";
import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <section className=" grid grid-cols-2">
      <ContactDetails />
      <ContactForm />
    </section>
  );
}
