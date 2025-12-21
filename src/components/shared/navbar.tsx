"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export type NavItem = {
  id: string;
  label: string;
};

type NavbarProps = {
  items: NavItem[];
  title: string;
  email: string;
};

export function Navbar({ items, title, email }: NavbarProps) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.5, 1] }
    );

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="container flex items-center gap-4 py-4">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          {title}
        </Link>
        <nav className="ml-auto flex flex-1 items-center justify-end gap-2 overflow-x-auto">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                active === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
            <a href={`mailto:${email}`} aria-label="Email Mohamed Tamer">
              Email
            </a>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
