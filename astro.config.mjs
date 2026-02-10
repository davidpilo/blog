// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://jrdx0.github.io',
	base: 'davidblog',
  integrations: [icon()]
});
