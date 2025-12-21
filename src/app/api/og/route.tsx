import { ImageResponse } from "next/og";

import { cvData } from "@/content/cv";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

const size = {
  width: 1200,
  height: 630,
};

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(circle at 20% 20%, rgba(16,185,129,0.18), transparent 30%), radial-gradient(circle at 80% 30%, rgba(79,70,229,0.2), transparent 30%), #0b1020",
        color: "#f8fafc",
        padding: "64px",
        fontFamily: '"Manrope", "Space Grotesk", sans-serif',
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 18px",
            backgroundColor: "rgba(16,185,129,0.12)",
            borderRadius: 999,
            color: "#34d399",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          {cvData.profile.location}
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>{cvData.profile.name}</div>
        <div style={{ fontSize: 30, color: "#cbd5e1", maxWidth: 900 }}>
          {cvData.profile.headline}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#cbd5e1",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 20,
        }}
      >
        <div style={{ display: "flex", gap: 16 }}>
          {cvData.skills.frontend.slice(0, 3).map((skill) => (
            <div
              key={skill}
              style={{
                padding: "8px 16px",
                borderRadius: 12,
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
        <div style={{ fontWeight: 600 }}>{siteConfig.url}</div>
      </div>
    </div>,
    size
  );
}
