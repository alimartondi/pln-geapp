"use client";

import * as React from "react";
import { AuthProvider } from "@/components/auth/auth-context";
import { LockedSection } from "@/components/auth/locked-section";
import AuthDialog from "@/components/auth/auth-dialog";

import Location from "@/components/sections/location";
import Cluster from "@/components/sections/cluster";
import Hero from "./hero";
import Overview from "./overview";
import About from "./about";
import Register from "./register";
import Contact from "./contact";

export default function HomeClient() {
  const [open, setOpen] = React.useState(false);

  return (
    <AuthProvider>
      <AuthDialog
        trigger={<button className="hidden" />}
        open={open}
        onOpenChange={setOpen}
      />

      <Hero />
      <Overview />
      <About />

      <LockedSection onLockedClick={() => setOpen(true)}>
        <Location />
        <Cluster />
      </LockedSection>

      <Register />
      <Contact />
    </AuthProvider>
  );
}
