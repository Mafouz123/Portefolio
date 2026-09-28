# Portfolio — Ingénieur Systèmes · IA Générative

Portfolio React + Vite + TypeScript, stylé avec Tailwind CSS et CSS personnalisé. Le site est exporté en fichiers statiques et déployé sur GitHub Pages par GitHub Actions.

## Démarrer en local

```bash
npm install
npm run dev
```

## Vérifier le build

```bash
npm run lint
npm run build
npm run preview
```

Le build de production utilise `/Portefolio/` comme préfixe, correspondant au dépôt GitHub `Portefolio`.

## Publier sur GitHub Pages

1. Pousser le dépôt sur GitHub, sur la branche `main`.
2. Dans **Settings → Pages → Build and deployment**, choisir **GitHub Actions** comme source.
3. Chaque push sur `main` lance le workflow `.github/workflows/deploy.yml`.

Le site sera disponible à `https://<nom-utilisateur>.github.io/Portefolio/`. Si le dépôt porte un autre nom, modifier `base` dans `vite.config.ts`.

## Personnaliser avant publication

- Dans l’objet `profile` de `src/App.tsx`, vérifie le nom, l’adresse e-mail, GitHub et remplace l’URL LinkedIn de démonstration par ton profil.
- Remplacer les projets explicitement indiqués comme exemples, les images, la timeline et les notes par des réalisations et informations réelles.
- Les certifications sont volontairement laissées à renseigner : n’ajouter que celles obtenues.
- Le formulaire prépare un e-mail via `mailto`; il ne stocke ni n’envoie les données depuis le site. Pour un formulaire serveur, configurer un endpoint Formspree.
- Les polices et visuels sont chargés depuis Google Fonts et Unsplash; une connexion est nécessaire pour les afficher.

## Stack

- React 19, TypeScript et Vite
- Tailwind CSS 4 et CSS personnalisé
- Framer Motion pour les animations
- Lucide React pour les icônes
- GitHub Actions et GitHub Pages pour l’hébergement statique# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
