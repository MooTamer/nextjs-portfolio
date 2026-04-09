import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-primary",
            align === "center" ? "mx-auto" : "mr-auto"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
