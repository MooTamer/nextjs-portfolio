import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="space-y-4">
        <h2 className="font-display text-3xl">Page not found</h2>
        <p className="text-muted-foreground">
          The page you’re looking for doesn’t exist. Let’s take you back home.
        </p>
        <Button asChild variant="default">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
