import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.2/mod.ts";

export default function handler(req: Request) {
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const title = params.get("title") ?? "Powered by Netlify Edge Functions";
  const pubDate = params.get("pubDate") ?? new Date().toISOString();
  const date = new Date(pubDate).toLocaleDateString("en-US", {
    dateStyle: "long",
  });
  const InterBold = await fetch("https://fonts.cdnfonts.com/s/19795/Inter-Bold.woff").then((res) => res.arrayBuffer());
  const InterRegular = await fetch("https://fonts.cdnfonts.com/s/19795/Inter-Regular.woff").then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="bg-zinc-900 flex flex-col w-full h-full">
        <div tw="flex flex-col w-full h-4/5 p-10 justify-center">
          <div tw="text-zinc-400 text-2xl mb-6">{date}</div>
          <div
            style={{
              backgroundImage: "linear-gradient(90deg, #4ade80, #3b82f6, #a855f7)",
              backgroundClip: "text",
              // @ts-ignore: necessary for clipping
              "-webkit-background-clip": "text",
            }}
            tw="flex text-6xl w-full font-bold text-transparent leading-snug tracking-tight"
          >
            {title}
          </div>
        </div>
        <div tw="w-full h-1/5 border-t border-zinc-700/50 flex p-10 items-center justify-between text-2xl">
          <div tw="flex items-center">
            <img src="https://raw.githubusercontent.com/lancerossdev/lanceross.xyz/master/public/favicon.svg" width="40px" height="40px" />
            <span tw="ml-3 text-zinc-400">lanceross.xyz</span>
          </div>
          <div tw="flex items-center">
            <img src="https://avatars.githubusercontent.com/u/46791833?s=80" tw="w-15 h-15 rounded-full" />
            <div tw="flex flex-col ml-3">
              <span tw="text-zinc-400">Lance Ross</span>
              <span tw="text-blue-400 font-base">@lancerossdev</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
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
    }
  );
}
