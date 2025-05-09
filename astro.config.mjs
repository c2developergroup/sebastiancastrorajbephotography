import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
    [solid()],
  ],
  site: 'https://c2developergroup.github.io',
  base: '/sebastiancastrorajbephotography',
});
