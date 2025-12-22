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
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  return (
    <div className="relative">
      {/* CONTENT */}
      <div className={!isAuthenticated ? "pointer-events-none" : ""}>
        {children}
      </div>

      {/* OVERLAY */}
      {!isAuthenticated && (
        <div
          className={cn(
            "absolute inset-0 z-20",
            "bg-background/40",
            "backdrop-blur-lg",
            "flex items-center justify-center",
            "pointer-events-auto"
          )}
        >
          <Button
            size="lg"
            onClick={onLockedClick}
            className="sticky top-[120px]"
          >
            Login to View Data
          </Button>
        </div>
      )}
    </div>
  );
}
