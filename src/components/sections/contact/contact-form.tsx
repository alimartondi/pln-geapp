"use client";

import * as React from "react";
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
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge, Check, X } from "lucide-react";

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

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [dialog, setDialog] = React.useState({
    open: false,
    title: "",
    description: "",
    status: "success" as "success" | "error",
  });

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

  const onSubmit = async (values: FormValues) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, String(values[key as keyof FormValues]));
    });

    formData.append("sheet", "Contact");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzFI7AtR5ZNReAHiQABUFjKD8DMjD8nvDkdF7BAeXoQ0HHFBnY2Q6O6PsUQzR4Xv9lg1w/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setDialog({
          open: true,
          title: "Well Done!",
          description:
            "Your message has been sent successfully, we will get back to you soon.",
          status: "success",
        });
        form.reset();
      } else {
        setDialog({
          open: true,
          title: "Oh... Sorry!",
          description: "An error occurred while submitting the form.",
          status: "error",
        });
      }
    } catch {
      setDialog({
        open: true,
        title: "Something Broke!",
        description: "An unexpected error occurred. Please try again later.",
        status: "error",
      });
    }
  };

  return (
    <>
      <Card className="w-full md:w-1/2 max-w-lg lg:w-sm bg-card">
        <CardContent>
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
                        <Input
                          placeholder="Enter your company name"
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

              <Button
                size={"lg"}
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full lg:w-auto"
              >
                {form.formState.isSubmitting
                  ? "Requesting..."
                  : "Request Access"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* AlertDialog terpisah */}
      <FormAlertDialog
        open={dialog.open}
        status={dialog.status}
        title={dialog.title}
        description={dialog.description}
        onClose={() => setDialog({ ...dialog, open: false })}
      />
    </>
  );
}

function FormAlertDialog({
  open,
  title,
  description,
  status,
  onClose,
}: {
  open: boolean;
  title: string;
  description: string;
  status: "success" | "error";
  onClose: () => void;
}) {
  const Icon = status === "success" ? Check : X;

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="relative flex items-center justify-center mb-3">
            <Badge
              className="size-16"
              fill={status === "success" ? "#039855" : "#d34036"}
              strokeWidth={0}
            />
            <Icon
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
              strokeWidth={5}
            />
          </div>
          <AlertDialogTitle className="text-2xl">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-base text-balance">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Okay, Got it</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
