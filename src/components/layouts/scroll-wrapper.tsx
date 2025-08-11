"use client";

import { Element } from "react-scroll";

type ScrollWrapperProps = {
  name: string;
  children: React.ReactNode;
  className?: string;
};

export default function ScrollWrapper({
  name,
  children,
  className,
}: ScrollWrapperProps) {
  return (
    <Element name={name} className={className}>
      {children}
    </Element>
  );
}
