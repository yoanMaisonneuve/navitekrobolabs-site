// Le flux RSS du journal de recherche (25.11.2026) : les quarante derniers cahiers, tirés de src/data/labo.json, chacun avec ce que ses
// prédictions sont devenues ; le lien mène au cahier entier.
import labo from '../data/labo.json';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const NOMS: { [k: string]: string } = { confirmée: 'confirmée(s)', réfutée: 'réfutée(s)', partielle: 'en partie', 'à revoir': 'à revoir', 'en attente': 'en attente' };

export function GET() {
	const items = labo.cahiers_liste
		.slice(0, 40)
		.map((c) => {
			const v = c.verdicts as { [k: string]: number };
			const bilan = Object.keys(v).length
				? 'Les prédictions : ' + Object.entries(v).map(([k, n]) => `${n} ${NOMS[k] ?? k}`).join(', ') + '.'
				: 'Un cahier sans prédiction chiffrée.';
			return `<item><title>${esc(`${c.id} — ${c.titre}`)}</title><link>https://ymiaconseil.com/navitek/recherche/#${c.id}</link><guid isPermaLink="false">navitek-${c.id}</guid><pubDate>${new Date(c.date + 'T12:00:00-05:00').toUTCString()}</pubDate><description>${esc(bilan)}</description></item>`;
		})
		.join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Navitek Robolabs — le journal de recherche</title>
<link>https://navitekrobolabs.com/journal/</link>
<atom:link href="https://navitekrobolabs.com/rss.xml" rel="self" type="application/rss+xml"/>
<description>Chaque cahier de recherche sur N0.1, l'humanoïde imprimé : sa question, ses prédictions écrites avant, son verdict après.</description>
<language>fr-ca</language>
<lastBuildDate>${new Date(labo.ecrit.replace(' ', 'T') + ':00-05:00').toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
