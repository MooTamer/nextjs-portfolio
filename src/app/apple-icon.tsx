import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS home-screen icon — matches the brand tile in /public/icon.svg.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #34d399 0%, #0d9488 100%)",
          color: "#06251d",
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: -6,
          fontFamily: "sans-serif",
        }}
      >
        MT
      </div>
    ),
    size
  );
}
