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

export default function AuthDialog({ trigger }: { trigger: React.ReactNode }) {
  const [mode, setMode] = React.useState<Mode>("signin");

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

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
          <SignInForm onSwitch={() => setMode("signup")} />
        ) : (
          <SignUpForm onSwitch={() => setMode("signin")} />
        )}
      </DialogContent>
    </Dialog>
  );
}
