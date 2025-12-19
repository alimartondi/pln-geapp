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

const FormSchema = z.object({
  name: z.string().min(5, {
    message: "Name must be at least 5 characters.",
  }),
  email: z.email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type SignUpForm = {
  showPassword: boolean;
  onTogglePassword: () => void;
  onSwitch: () => void;
};

export default function SignUpForm({
  showPassword,
  onTogglePassword,
  onSwitch,
}: SignUpForm) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    // mode: "onBlur",
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="fullName">Full Name *</FieldLabel>
              <Input
                {...field}
                type="text"
                id="fullName"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your full name"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

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
            Sign Up
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
