import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cardsagainsthumanity.example',
  server: { host: true, port: Number(process.env.PORT) || 4321 },
});
