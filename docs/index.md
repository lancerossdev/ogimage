# Netlify OG Generator Edge

As the title says, this is a Netlify Edge Function that generates Open Graph images for your blog posts. It uses Deno as runtime and Netlify to deploy it as edge functions. It's an inspiration from Matt Kane's [`og-edge`](https://github.com/ascorbic/og-edge) and Kevin Zuniga's [website](https://www.kevinzunigacuellar.com/) which uses OG Image Generator on Edge.

This works on Netlify's Edge Functions, which means it's blazing fast and free. I'm not sure if it works with other edge functions like Cloudflare Workers.

Wanna try it out? add `/og?title=Hello` after the link. It will automagically generate an image for you!

## Getting Started

1. Create a new directory on the root of your project named `netlify/edge-functions`

2. After that, create a new file ending in `.tsx` with any filename for it. This is now the code for the OG Image Generator.

3. Add a file called `netlify.toml` at the root of your project and add the following. The `function` is going to be the filename of your TSX file and the path is the directory of the functions when you deployed it.

```toml
[[edge_functions]]
  function = "og"
  path = "/og"
```

4. Now let's start creating our OG Image Generator. You can copy the example on this project or create your one based on your likings. This is an example code that uses CSS in JS.

```tsx
import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.2/mod.ts";

export default async function handler(req: Request) {
  const url = new URL(req.url);
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");

  return new ImageResponse(
  (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        fontSize: 48,
        fontWeight: 600,
      }}
    >
      <div style={{ marginTop: 40 }}>{title}</div>
    </div>
  ),
  {
    width: 1200,
    height: 630,
  });
}

```

5. Now, to test it locally, install the `netlify-cli` globally in your machine with this command:

```bash
npm install -g netlify-cli
```

6. Lastly, type `netlify dev` so you can test it now locally. To test the OG Image Generator, you can navigate to [localhost](localhost:8888/og-image?title=Hello%20World) and it will show the output in a few seconds.

It will show the result that looks like this.

![Website Preview](../public/og.png)





