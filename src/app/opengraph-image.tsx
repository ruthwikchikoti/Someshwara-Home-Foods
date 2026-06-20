import { ImageResponse } from "next/og";

export const alt =
  "Someshwara Home Foods — Authentic Telangana Home Foods · No Preservatives";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 25%, #8a1c30 0%, #6e1423 55%, #4d0d18 100%)",
          color: "#faf5ec",
          fontFamily: "sans-serif",
          padding: "64px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 48,
            right: 48,
            bottom: 48,
            border: "3px solid #d4af37",
            borderRadius: 24,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 8,
            color: "#d4af37",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          సోమేశ్వర హోమ్ ఫుడ్స్
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 800,
            color: "#faf5ec",
            textAlign: "center",
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          Someshwara Home Foods
        </div>
        <div
          style={{
            display: "flex",
            width: 220,
            height: 4,
            background: "#d4af37",
            borderRadius: 4,
            marginBottom: 28,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#f3e2c0",
            textAlign: "center",
          }}
        >
          Authentic Telangana Home Foods · No Preservatives
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
