import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Live streaming + tips, sans intermediaire";
  const subtitle =
    searchParams.get("subtitle") ??
    "Streaming ultra-low latency, contenus exclusifs, subscriptions. Vos fans, vos revenus.";

  const accent = "#fb7185";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1a0510 0%, #3d0b26 55%, #5a1336 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(251,113,133,0.30) 0%, rgba(251,113,133,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
            fontSize: "20px",
            color: accent,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 16px ${accent}`,
            }}
          />
          Aevia - AeviaLive
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "30px",
            color: "#fecdd3",
            lineHeight: 1.4,
            maxWidth: "950px",
            fontWeight: 400,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "18px",
            color: "#9ca3af",
          }}
        >
          aevia-live.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
