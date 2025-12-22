"use client";

import { useState } from "react";

import {
  Field,
  FieldGroup,
  FieldError,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";

import { Controller, useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

import { Eye, EyeClosed, Info } from "lucide-react";

import { useAuth } from "./auth-context";

const FormSchema = z.object({
  email: z.email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type SignInFormProps = {
  showPassword: boolean;
  onTogglePassword: () => void;
  onSwitch: () => void;
  onSuccess: () => void;
};

export default function SignInForm({
  showPassword,
  onTogglePassword,
  onSwitch,
  onSuccess,
}: SignInFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    // mode: "onBlur",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // 🔥 PENTING
      onSuccess(); // tutup dialog
      form.reset();
    } catch (error: any) {
      setErrorMessage(error.message || "Email or password is incorrect.");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
      {errorMessage && (
        <Alert variant="destructive">
          <Info className="h-4 w-4" />
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email *</FieldLabel>
              <Input
                {...field}
                type="email"
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="m@example.com"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password *</FieldLabel>
              <div className="relative">
                <Input
                  {...field}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                  autoComplete="off"
                />
                <Button
                  type="button"
                  size={"sm"}
                  variant="ghost"
                  onClick={onTogglePassword}
                  className="absolute right-0.5 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </Button>
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Field>
          <Button
            size={"lg"}
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full lg:w-auto"
          >
            Sign In
          </Button>
          <FieldDescription>
            Don&apos;t have an account?{" "}
            <span
              onClick={onSwitch}
              className="underline cursor-pointer hover:text-foreground underline-offset-4"
            >
              Sign up
            </span>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
