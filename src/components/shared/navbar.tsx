"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  items: NavItem[];
  title: string;
  email: string;
}

export function Navbar({ items, title, email }: NavbarProps) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.5, 1] }
    );

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-white/[0.08] bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container flex items-center gap-3 py-4">
        <Link
          href="/"
          className="font-display text-base font-extrabold tracking-tight sm:text-lg"
        >
          {title}
        </Link>

        <div className="ml-auto flex items-center gap-2">
          {/* Mobile hamburger */}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <ThemeToggle />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-150",
                  active === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" variant="outline" className="ml-2">
              <a href={`mailto:${email}`} aria-label="Email Mohamed Tamer">
                Email
              </a>
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/[0.08] bg-background/95 backdrop-blur-xl px-4 pb-5 pt-3">
          <div className="grid grid-cols-3 gap-2 mb-3">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={cn(
                  "rounded-xl px-3 py-2 text-center text-sm font-semibold transition-colors",
                  active === item.id
                    ? "bg-primary/10 text-primary"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground"
                )}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button asChild size="sm" variant="default" className="w-full">
            <a href={`mailto:${email}`}>Email me</a>
          </Button>
        </div>
      )}
    </header>
  );
}
