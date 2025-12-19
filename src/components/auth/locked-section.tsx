"use client";

import { cn } from "@/lib/utils";
import { useAuth } from "./auth-context";
import { Button } from "@/components/ui/button";

export function LockedSection({
  children,
  onLockedClick,
}: {
  children: React.ReactNode;
  onLockedClick?: () => void;
}) {
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative">
      {/* CONTENT (yang akan diblur) */}
      <div>{children}</div>

      {/* OVERLAY (yang melakukan backdrop blur) */}
      {!isAuthenticated && (
        <div
          className={cn(
            "absolute inset-0 z-10",
            "bg-background/40",
            "backdrop-blur-lg",
            "flex items-center justify-center"
          )}
        >
          <div className="h-full py-20">
            {" "}
            <Button
              size={"lg"}
              onClick={onLockedClick}
              className="sticky top-[100px] lg:top-[200px]"
            >
              Login to View Data
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
