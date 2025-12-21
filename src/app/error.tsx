"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="card-surface max-w-lg space-y-4 rounded-2xl p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <h2 className="font-display text-2xl">Something went wrong</h2>
        <p className="text-sm text-muted-foreground">
          An unexpected error occurred. You can retry loading the page.
        </p>
        <Button onClick={reset} className="mx-auto">
          <RotateCcw className="h-4 w-4" />
          Try again
        </Button>
      </div>
    </div>
  );
}
