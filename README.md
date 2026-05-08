# navitekrobolabs-site

Site officiel de **Navitek Robolabs** — [navitekrobolabs.com](https://navitekrobolabs.com)

> *Physical AI, Made in Québec. Cap : 2126, le système solaire.*

---

## Statut

**v0** — manifeste fondateur. Site en construction silencieuse pendant que nous préparons le terrain (mode capitaine silencieux).

## Stack

- **Astro** 6.x (statique, build → HTML/CSS pur, zéro framework runtime)
- **TypeScript** strict
- **Hébergement** : Azure Static Web Apps (pay-as-you-go)
- **Domaine + DNS** : Porkbun → Azure
- **CI/CD** : déploiement automatique via GitHub Actions à chaque push sur `main`

## Développement local

```bash
npm install
npm run dev      # dev server sur http://localhost:4321
npm run build    # build production dans ./dist
npm run preview  # preview du build
```

## Roadmap

| Version | Livrable | Cible |
|---|---|---|
| **v0** | Manifeste fondateur | 2026 — en cours |
| **v1** | Dashboard cyborg-loop live (logs, runs, vidéos sim, dernier corps + cerveau) | ~1 mois |
| **v2** | Pre-orders + page produit + suivi acheteur | ~2 mois |
| **v3** | Sims publiques navigateur, fork du cerveau, communauté contributeurs | ~3-6 mois |

## Licence

MIT — cf. [LICENSE](./LICENSE). Le savoir-faire ne meurt pas avec l'entreprise.

---

*Navitek Robolabs · fondé par Yoan Maisonneuve · Québec*
