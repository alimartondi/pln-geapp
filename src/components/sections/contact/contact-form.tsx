"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must be less than 30 characters.",
    }),

  email: z.email({ message: "Please enter a valid email address." }),

  company: z
    .string()
    .min(3, {
      message: "Company name must be at least 2 characters.",
    })
    .max(30, {
      message: "Company name must be less than 30 characters.",
    }),

  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters.",
    }),
  // service: z.string({
  //   required_error: "Please select a service.",
  // }),
  // mobile: z.boolean().default(false).optional(),
  // language: z.string({
  //   required_error: "Please select a language.",
  // }),
  // type: z.enum(["all", "mentions", "none"], {
  //   required_error: "You need to select a notification type.",
  // }),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      company: "",
      message: "",
      // mobile: true,
    },
  });

  function onSubmit(values: any) {
    // Do something with the form values.
    console.log(values);
    alert("Form submitted.");
    form.reset();
  }

  return (
    <div className="bg-transparent border px-4 lg:px-6 py-6 lg:py-8 rounded-lg w-full max-w-lg lg:w-sm shadow-xs">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <div className="space-y-3">
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="space-y-3">
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="e.g. yourname@company.com"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <div className="space-y-3">
                  <FormLabel>Company *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your company name" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className="space-y-3">
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      className="resize-none min-h-28"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button size={"lg"} type="submit">
            {form.formState.isSubmitting ? "Requesting..." : "Request Access"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
