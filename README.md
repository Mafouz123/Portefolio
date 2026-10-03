# Portfolio — Ingénieur solution en IA générative

Portfolio bilingue (français/anglais), réalisé avec React, TypeScript et Vite. Le site présente un profil, ses compétences, ses projets et son parcours; il est exporté en fichiers statiques pour GitHub Pages.

## Sommaire

- [Objectif et périmètre](#objectif-et-périmètre)
- [Fonctionnalités](#fonctionnalités)
- [Architecture](#architecture)
- [Prérequis](#prérequis)
- [Installation et développement](#installation-et-développement)
- [Personnalisation](#personnalisation)
- [Contrôles qualité](#contrôles-qualité)
- [Déploiement](#déploiement)
- [Réutilisation](#réutilisation)

## Objectif et périmètre

Ce dépôt contient le site de présentation d’un ingénieur solution spécialisé en IA générative. C’est un frontend statique : il n’héberge pas de modèle, d’API d’inférence, de stockage utilisateur ni de backend. Aucune clé API n’est nécessaire.

Les projets affichés dans le portfolio sont du contenu de présentation. Pour les réutiliser comme preuves d’expérience, remplacer descriptions, liens et éventuelles mesures par des informations vérifiables.

## Fonctionnalités

- Interface responsive avec navigation par ancres.
- Versions française et anglaise; la préférence de langue est conservée dans `localStorage`.
- Profil, portrait, compétences, certificats vérifiables, projets et parcours.
- Contact via WhatsApp avec message prérempli. L’utilisateur confirme lui-même l’envoi dans WhatsApp.
- Export statique et publication continue sur GitHub Pages.

## Architecture

| Chemin | Responsabilité |
| --- | --- |
| `src/App.tsx` | Interface, traductions, contenu du profil, projets, compétences, certificats et navigation |
| `src/index.css` | Styles globaux, composants et adaptations responsive |
| `src/main.tsx` | Point d’entrée React |
| `public/` | Portrait, favicon et autres ressources statiques |
| `vite.config.ts` | Plugins Vite et préfixe du site en production |
| `.github/workflows/deploy.yml` | Build et déploiement GitHub Pages sur `main` |

Le contenu est actuellement défini dans `src/App.tsx` : `profile`, `translations`, `certificateGroups`, `skills` et `projects`. Les liens vers les ressources locales doivent respecter `import.meta.env.BASE_URL` pour fonctionner sous un sous-chemin GitHub Pages.

## Prérequis

- Node.js 22 (le workflow CI utilise Node.js 22).
- npm fourni avec Node.js.
- Git pour contribuer et publier.

## Installation et développement

```bash
npm ci
npm run dev
```

Vite affiche l’adresse locale dans le terminal. Pour tester le build de production localement :

```bash
npm run build
npm run preview
```

## Personnalisation

1. Dans `profile` (`src/App.tsx`), modifier le nom, les liens GitHub/LinkedIn/Credly, le blog et le numéro WhatsApp.
2. Pour WhatsApp, saisir l’indicatif international et le numéro en chiffres uniquement, sans `+`, espaces ni tirets. Exemple de format : `22961234567`.
3. Remplacer `public/profile_img.PNG` par le portrait souhaité, en gardant le même nom ou en mettant à jour son chemin dans le composant.
4. Adapter les chaînes `translations.fr` et `translations.en` ensemble afin que les deux langues restent cohérentes.
5. Mettre à jour les tableaux `skills`, `projects` et `certificateGroups`. Pour un projet d’IA, documenter le problème, les données utilisées, l’architecture, l’évaluation, les limites et un lien de démonstration ou de code vérifiable. Ne pas publier de données sensibles ni de résultats non mesurés.
6. Utiliser des images dont tu possèdes les droits. Les polices et certains visuels actuels sont chargés depuis Google Fonts et Unsplash et nécessitent une connexion internet.

Le formulaire ne transmet rien à un serveur : il ouvre `https://wa.me/` avec le nom et le message préremplis. L’envoi final reste sous le contrôle de la personne qui contacte.

## Contrôles qualité

```bash
npm run lint
npm run build
```

`npm run build` exécute d’abord la vérification TypeScript, puis produit le site dans `dist/`. Le projet ne définit pas de suite de tests unitaires; vérifier également les parcours principaux en prévisualisant le build, sur écran étroit et large.

## Déploiement

Le dépôt `Portefolio` est configuré avec le préfixe de production `/Portefolio/` dans `vite.config.ts`.

1. Pousser le code sur la branche `main`.
2. Dans **Settings → Pages → Build and deployment**, sélectionner **GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` installe les dépendances avec `npm ci`, construit `dist/` et le publie.

URL attendue : `https://<utilisateur>.github.io/Portefolio/`. Pour un dépôt portant un autre nom, ajuster `base` dans `vite.config.ts` avant le build.

## Réutilisation

Pour adapter ce portfolio, forker ou copier le dépôt, puis suivre la section [Personnalisation](#personnalisation), remplacer les informations personnelles et vérifier chaque lien avant publication. Aucun fichier `LICENSE` n’est actuellement fourni : ajouter une licence explicite si tu souhaites autoriser la réutilisation ou la redistribution du code.

## Stack

- React 19, TypeScript 6 et Vite 8
- Tailwind CSS 4 et CSS personnalisé
- Framer Motion et Lucide React
- GitHub Actions et GitHub Pages
