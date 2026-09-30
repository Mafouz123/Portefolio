# Portfolio — Ingénieur Systèmes · IA Générative

Portfolio personnel construit avec React, Vite et TypeScript. Le site statique est publié sur GitHub Pages via GitHub Actions.

## Démarrer en local

```bash
npm install
npm run dev
```

## Vérifier le projet

```bash
npm run lint
npm run build
npm run preview
```

Le build utilise `/Portefolio/` comme préfixe pour le dépôt GitHub `Portefolio`.

## Publier sur GitHub Pages

1. Pousser le dépôt sur la branche `main`.
2. Dans **Settings → Pages → Build and deployment**, choisir **GitHub Actions** comme source.
3. Chaque push sur `main` lance `.github/workflows/deploy.yml`.

Le site sera disponible à `https://<nom-utilisateur>.github.io/Portefolio/`. Si le dépôt porte un autre nom, modifier `base` dans `vite.config.ts`.

## Personnaliser

- Vérifier le nom, GitHub, LinkedIn, Credly, WhatsApp et l’URL Digital Decoder dans l’objet `profile` de `src/App.tsx`.
- Le formulaire ouvre WhatsApp au `+229 91 17 77 23` avec le message prérempli; l’utilisateur doit encore appuyer sur Envoyer.
- Adapter le récit de parcours, les projets, images et certifications à tes informations réelles.
- Les polices et images proviennent de Google Fonts et Unsplash; leur chargement nécessite une connexion internet.

## Stack

- React 19, TypeScript et Vite
- Tailwind CSS 4 et CSS personnalisé
- Framer Motion et Lucide React
- GitHub Actions et GitHub Pages
