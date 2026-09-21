# Backlog d'améliorations

## Priorité 1 — Correctifs importants

### Responsive

- [x] Remplacer les largeurs fixes de la grille des personnages (`200px`, `175px`, `150px`, `125px`) par une grille fluide avec `minmax()` et `auto-fit`/`auto-fill`.
- [x] Vérifier la grille sur toutes les largeurs intermédiaires afin d'éviter les débordements horizontaux.
- [x] Remplacer les tailles fixes importantes (`128px`, `45px`, `75px`, etc.) par des tailles fluides basées sur `clamp()`.
- [x] Autoriser le retour à la ligne dans les métadonnées des contextes au lieu d'utiliser `white-space: nowrap`.
- [x] Corriger l'animation des contenus de contexte : `max-height: 500px` coupe les descriptions longues.
- [x] Revoir le positionnement fixe des boutons thème/accueil afin qu'ils ne recouvrent pas les titres ou le contenu sur mobile.
- [x] Rendre la page de version utilisable sur mobile : `font-size: 300px` est trop grand.
- [x] Vérifier la fenêtre de choix de langue sur petits écrans et orientations portrait/paysage.
- [x] Modifier le bouton permettant d'afficher des photos plutôt que des icônes sur la page du personnage pour que l'utilisateur comprenne que c'est un bouton et pas juste une icône

### Accessibilité et HTML

- [x] Transformer les images de personnages cliquables en vrais boutons ou liens accessibles au clavier.
- [x] Ajouter des styles `:focus-visible` aux boutons de langue, boutons principaux et bouton de changement d'image.
- [x] Éviter les liens `<a>` imbriqués dans le bouton d'ouverture d'un contexte.
- [x] Ajouter un nom accessible au dialogue de sélection de langue.
- [ ] Ajouter la gestion de la touche `Escape` pour le dialogue de langue.
- [ ] Mettre en place une gestion correcte du focus dans le dialogue de langue.
- [ ] Vérifier que toutes les zones tactiles font au moins environ `44px`.
- [ ] Ajouter des textes `alt` descriptifs pour les images de personnages.
- [ ] Utiliser `alt=""` pour les images purement décoratives.
- [ ] Vérifier la hiérarchie des titres et l'impact des pseudo-éléments `~` sur les lecteurs d'écran.
- [ ] Ajouter `prefers-reduced-motion` aux animations personnalisées, pas uniquement aux anciens styles CRA.

### Chargement et erreurs

- [ ] Vérifier `response.ok` après chaque `fetch()`.
- [ ] Ajouter un état de chargement pour les personnages, les détails et les contextes.
- [ ] Ajouter un état d'erreur visible par l'utilisateur au lieu de seulement utiliser `console.error()`.
- [ ] Distinguer les états `loading`, `error` et `not found` dans `CharacterDetail`.
- [ ] Ajouter un `AbortController` aux requêtes annulables.
- [ ] Ajouter un nettoyage des `setTimeout()` dans le changement d'image.
- [ ] Ajouter une route 404 avec un message et un bouton de retour.

### Internationalisation

- [ ] Traduire les textes codés en dur : `Personnage`, `Univers`, `Character not found`, messages d'erreur et labels ARIA.
- [ ] Traduire les titres et textes de la fenêtre de sélection de langue.
- [ ] Ajouter une langue de secours dans i18next au lieu de `fallbackLng: false`.
- [ ] Vérifier que toutes les clés de traduction françaises existent en anglais, et inversement.
- [ ] Synchroniser l'attribut `lang` de `<html>` avec la langue sélectionnée.
- [ ] Centraliser la clé `preferredLanguage` et la logique de changement de langue.
- [ ] Déplacer les traductions volumineuses dans `locales/fr.json` et `locales/en.json`.

### Routes et navigation

- [ ] Uniformiser les routes en minuscules : `/infos`, `/rules`, `/version`.
- [ ] Vérifier que les liens et navigations utilisent exactement les mêmes chemins que les routes.
- [ ] Ajouter une route pour les URLs inconnues.
- [ ] Ajouter une gestion propre des paramètres invalides pour `characterName`.
- [ ] Remplacer les traductions dynamiques non contrôlées par une validation explicite des noms de personnages.

### Thème

- [ ] Persister le thème clair/sombre dans `localStorage`.
- [ ] Respecter éventuellement la préférence système `prefers-color-scheme` lors de la première visite.
- [ ] Vérifier la mise à jour de la couleur du navigateur (`theme-color`) lors du changement de thème.
- [ ] Corriger `--default-text-color`, utilisée dans `Contexts.scss` mais non définie.
- [ ] Vérifier les contrastes en mode clair et sombre.

## Priorité 2 — Qualité de code

### Architecture et types

- [ ] Mutualiser le chargement de `Characters.json` et `Contexts.json`.
- [ ] Créer des fonctions ou services typés pour le chargement et la validation des données.
- [ ] Valider la structure des JSON au runtime au lieu de faire uniquement des casts TypeScript.
- [ ] Créer des types partagés pour `Character`, `Context` et les langues.
- [ ] Renommer `chatacterId` en `characterId`, ou supprimer cette propriété si elle est inutile.
- [ ] Vérifier l'utilisation de `age`, actuellement présent dans les données mais non affiché.
- [ ] Remplacer les chaînes dynamiques fragiles des traductions par des clés validées.
- [ ] Uniformiser les conventions de code : guillemets, points-virgules, espaces et formatage.
- [ ] Uniformiser les imports et éviter les imports React inutiles.

### Composants et logique

- [ ] Extraire un hook ou service commun pour la préférence de langue.
- [ ] Extraire un hook ou service commun pour charger les données JSON.
- [ ] Ajouter une gestion d'état cohérente dans les composants qui chargent des données.
- [ ] Éviter les effets de bord non nettoyés lors des démontages de composants.
- [ ] Ajouter des constantes partagées pour les chemins d'assets et les routes.
- [ ] Vérifier la nécessité de `React.StrictMode` vis-à-vis des appels de chargement en développement.

### Styles

- [ ] Centraliser les tailles, espacements, rayons et transitions dans des variables CSS.
- [ ] Créer des styles partagés pour les titres de page.
- [ ] Créer des styles partagés pour les boutons.
- [ ] Utiliser une largeur de contenu cohérente entre les pages.
- [ ] Limiter la largeur des longs textes à environ `65ch` pour améliorer la lisibilité.
- [ ] Ajouter des états `hover`, `active` et `focus-visible` cohérents à tous les contrôles.
- [ ] Supprimer les règles vides ou inutilisées, notamment le media query vide de `HomePage.scss`.
- [ ] Supprimer les styles hérités de Create React App encore inutilisés dans `App.css`.

## Priorité 3 — Performance et assets

- [ ] Convertir les grandes images PNG en WebP ou AVIF.
- [ ] Redimensionner les images à la taille réellement affichée.
- [ ] Ajouter `loading="lazy"` aux images non visibles immédiatement.
- [ ] Ajouter `srcSet` et `sizes` lorsque plusieurs résolutions sont disponibles.
- [ ] Vérifier le poids total des assets avant chaque mise en production.
- [ ] Éviter de charger inutilement les deux variantes d'images lorsqu'une seule est affichée.
- [ ] Vérifier si le dossier `build/` doit être versionné ou généré uniquement au déploiement.

## Priorité 4 — Sécurité, confidentialité et SEO

### Script externe

- [ ] Remplacer le script analytics chargé en HTTP depuis une adresse IP par une URL HTTPS stable.
- [ ] Vérifier le mixed content en production.
- [ ] Documenter le service analytics utilisé.
- [ ] Ajouter un mécanisme de consentement si nécessaire.
- [ ] Vérifier la politique de confidentialité liée au tracking.

### SEO et métadonnées

- [ ] Ajouter une balise `<meta name="description">`.
- [ ] Mettre à jour le titre de page selon la route et la langue.
- [ ] Mettre à jour dynamiquement `lang` et les métadonnées importantes.
- [ ] Ajouter une page 404 correctement indexable ou non indexable selon le besoin.
- [ ] Vérifier le favicon et les métadonnées mobiles.

### Contenu NSFW

- [ ] Définir une stratégie claire pour les contenus NSFW.
- [ ] Ajouter un avertissement explicite si nécessaire.
- [ ] Déterminer si un filtrage ou une confirmation d'âge est nécessaire.
- [ ] Vérifier que l'indication NSFW est accessible autrement que par la couleur ou l'icône.

## outillage

- [ ] Ajouter un script de test fonctionnel dans `package.json`.
- [ ] Ajouter ESLint si aucun linting fonctionnel n'est actuellement configuré.
- [ ] Ajouter Prettier ou documenter le formatage utilisé.
- [ ] Mettre à jour le `README.md`, encore basé sur Create React App alors que le projet utilise Vite.
- [ ] Documenter les commandes `npm run dev`, `npm run build` et `npm run preview`.
- [ ] Documenter l'organisation des composants, données, assets et traductions.
- [ ] Corriger l'avertissement de build concernant le script externe dans `index.html`.

## Ordre conseillé d'implémentation

1. Corriger les routes, les liens imbriqués et l'accessibilité clavier.
2. Ajouter les états de chargement, d'erreur et de ressource introuvable.
3. Corriger le responsive de la grille, des textes et des contextes.
4. Finaliser l'internationalisation des textes et des métadonnées.
5. Persister le thème et améliorer les variables CSS.
6. Optimiser les images et les autres assets.
8. Mettre à jour le README et nettoyer le code hérité.
