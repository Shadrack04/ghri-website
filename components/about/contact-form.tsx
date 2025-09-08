"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formSchema, FormType } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Card className="w-full max-w-lg px-4 pb-8 pt-4 bg-[#E5E7EB] shadow-none rounded-4xl ">
      <CardHeader></CardHeader>
      <CardContent className=" py-0">
        <Form {...form}>
          <form className=" flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-muted">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className=" bg-[#FFFFFF] py-6 px-4 border-2 border-[#E5E7EB]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-muted">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Email"
                      {...field}
                      className=" bg-[#FFFFFF] py-6 px-4 border-2 border-[#E5E7EB]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-muted">Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      {...field}
                      className=" bg-[#FFFFFF] py-6 px-4 border-2 border-[#E5E7EB]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-muted">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter Message"
                      {...field}
                      className=" bg-[#FFFFFF] py-4 h-36 px-4 border-2 border-[#E5E7EB]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2">
        <Button type="submit" className=" py-6 px-10">
          Send
        </Button>
      </CardFooter>
    </Card>
  );
}
