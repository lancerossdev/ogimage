# Netlify OG Generator Edge ⚡

As the title says, this is a Netlify Edge Function that generates Open Graph images for your blog posts. It uses Deno as runtime and Netlify to deploy it as edge functions. It's an inspiration from Matt Kane's [`og-edge`](https://github.com/ascorbic/og-edge) and Kevin Zuniga's [website](https://www.kevinzunigacuellar.com/) which uses OG Image Generator on Edge.

This works on Netlify's Edge Functions, which means it's blazing fast and free. I'm not sure if it works with other edge functions like Cloudflare Workers.

## Dev Notes 📝
You don't have to build the website made with Astro, I just want to have it so I can have a really cool webpage for the project.

`netlify dev` - Run the project locally

`netlify deploy` - Deploy the project to Netlify

## License 📜

This repository has [MIT License](https://github.com/lancerossdev/og-edge-netlify/blob/master/LICENSE).