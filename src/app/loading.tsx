export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
      <div className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 shadow-card">
        <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
        Loading portfolio…
      </div>
    </div>
  );
}
