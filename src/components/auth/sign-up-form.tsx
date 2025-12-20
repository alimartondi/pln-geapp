"use client";

import {
  Field,
  FieldGroup,
  FieldError,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const FormSchema = z.object({
  name: z.string().min(5, {
    message: "Name must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type SignUpFormProps = {
  showPassword: boolean;
  onTogglePassword: () => void;
  onSwitch: () => void;
};

export default function SignUpForm({
  showPassword,
  onTogglePassword,
  onSwitch,
}: SignUpFormProps) {
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setApiError(null);
    setSuccess(false);
    
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess(true);
      form.reset();

    } catch (err: any) {
      setApiError(err.message);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
      <FieldGroup>
        {apiError && (
          <p className="text-sm text-red-600">{apiError}</p>
        )}

        {success && (
          <p className="text-sm text-green-600">
            Account created successfully. Please sign in.
          </p>
        )}

        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Full Name *</FieldLabel>
              <Input
                {...field}
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your full name"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Email *</FieldLabel>
              <Input
                {...field}
                type="email"
                aria-invalid={fieldState.invalid}
                placeholder="m@example.com"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Password *</FieldLabel>
              <div className="relative">
                <Input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                />
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={onTogglePassword}
                  className="absolute right-0.5 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </Button>
              </div>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Field>
          <Button
            size="lg"
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full lg:w-auto"
          >
            {form.formState.isSubmitting
              ? "Creating account..."
              : "Sign Up"}
          </Button>

          <FieldDescription>
            Already have an account?{" "}
            <span
              onClick={onSwitch}
              className="underline cursor-pointer hover:text-foreground underline-offset-4"
            >
              Sign in
            </span>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}