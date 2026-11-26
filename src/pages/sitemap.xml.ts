// Le plan du site pour les moteurs de recherche (25.11.2026) ; la date : celle des chiffres (src/data/labo.json).
import labo from '../data/labo.json';

const PAGES = ['/', '/these/', '/films/', '/build/', '/code/', '/journal/', '/pourquoi/'];

export function GET() {
	const jour = labo.ecrit.slice(0, 10);
	const urls = PAGES.map((p) => `<url><loc>https://navitekrobolabs.com${p}</loc><lastmod>${jour}</lastmod></url>`).join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
