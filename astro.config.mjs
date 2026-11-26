// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://navitekrobolabs.com',
	// l'ancienne page « Démos » (les vidéos du bras, dans un dépôt privé) est devenue « Films » le 25.11.2026
	redirects: {
		'/demos': '/films',
	},
});
