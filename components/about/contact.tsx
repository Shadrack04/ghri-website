import React from "react";
import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";
import NewsLetter from "../news-letter";

export default function Contact() {
  return (
    <section className="relative my-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <ContactDetails />
        <ContactForm />
      </div>

      <NewsLetter />
    </section>
  );
}
