"use client";

import * as React from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import SignInForm from "@/components/auth/sign-in-form";
import SignUpForm from "@/components/auth/sign-up-form";

type Mode = "signin" | "signup";

type AuthDialogProps = {
  trigger?: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function AuthDialog({
  trigger,
  open,
  onOpenChange,
}: AuthDialogProps) {
  const [mode, setMode] = React.useState<Mode>("signin");
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "signin"
              ? "Sign in to your account"
              : "Create an account"}
          </DialogTitle>
          <DialogDescription>
            {mode === "signin"
              ? "Enter your email below to sign in to your account"
              : "Enter your information below to create your account"}
          </DialogDescription>
        </DialogHeader>

        {mode === "signin" ? (
          <SignInForm
            showPassword={showPassword}
            onTogglePassword={togglePasswordVisibility}
            onSwitch={() => setMode("signup")}
          />
        ) : (
          <SignUpForm
            showPassword={showPassword}
            onTogglePassword={togglePasswordVisibility}
            onSwitch={() => setMode("signin")}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
