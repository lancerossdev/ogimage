import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.2/mod.ts";

export default async function handler(req: Request) {
  const url = new URL(req.url);
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");
  const InterBold = await fetch("https://fonts.cdnfonts.com/s/19795/Inter-Bold.woff").then((res) => res.arrayBuffer());
  const InterRegular = await fetch("https://fonts.cdnfonts.com/s/19795/Inter-Regular.woff").then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          color: "black"
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "2rem",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "84",
              fontWeight: "700",
              textAlign: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              marginBottom: "4rem",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "48",
              textAlign: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
            }}
          >
            Hosted in Netlify ⚡
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          data: InterRegular,
          name: "Inter",
          weight: 400,
          style: "normal",
        },
        {
          data: InterBold,
          name: "Inter",
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
