"use client";

import * as React from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
} from "@/components/ui/dialog";

import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";

type Mode = "signin" | "signup";

type AuthDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [mode, setMode] = React.useState<Mode>("signin");
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        onOpenChange(open);
        if (open) {
          setMode("signin");
          setShowPassword(false); // 🔥 reset
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "signin"
              ? "Sign in to your account"
              : "Create an account"}
          </DialogTitle>
          <DialogDescription>
            {mode === "signin"
              ? "Enter your email below to sign in"
              : "Enter your information below to create an account"}
          </DialogDescription>
        </DialogHeader>

        {mode === "signin" ? (
          <SignInForm
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword((p) => !p)}
            onSwitch={() => setMode("signup")}
            onSuccess={() => onOpenChange(false)} // 🔥 CLOSE
          />
        ) : (
          <SignUpForm
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword((p) => !p)}
            onSwitch={() => setMode("signin")}
            onSuccess={() => onOpenChange(false)} // 🔥
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
