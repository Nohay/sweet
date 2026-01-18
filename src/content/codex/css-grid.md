---
title: "La Trame du Monde"
subtitle: "CSS Grid"
publishDate: 2026-01-14
tags: ["CSS", "Layout", "Grid"]
domain: "Web Dev"
concept2D: "Utiliser des `<table>` pour la mise en page (l'ancienne méthode, rigide)."
mecanique: "Un modèle de boîte bidimensionnel qui permet de créer des mises en page complexes en définissant des lignes et des colonnes explicites."
vision3D: "Si Flexbox est un souffle, Grid est la main de l'architecte qui dessine la trame invisible du monde. On ne pousse pas les objets, on leur assigne une place précise dans une structure. C'est le pouvoir de dire : 'Toi, tu iras ici, de cette colonne à celle-ci', créant des espaces complexes et asymétriques."
status: "Acquis"
---

CSS Grid a complété Flexbox en offrant un contrôle sur les deux dimensions simultanément. C'est l'outil de choix pour la mise en page globale d'une page ou d'un composant complexe.

### La Philosophie de la Grille

Grid est **bidimensionnel**. Il raisonne en termes de grille, avec des lignes et des colonnes :
*   **Définition de la trame (`grid-template-columns` / `rows`) :** Vous définissez la structure de votre grille à l'avance. Combien de colonnes ? De quelle taille ?
*   **Placement des éléments (`grid-column` / `grid-row`) :** Vous pouvez ensuite placer chaque élément précisément à l'intérieur de cette grille, en lui disant de s'étendre sur une ou plusieurs cellules.

C'est l'outil parfait pour les mises en page de magazines, les tableaux de bord, et toute interface où les éléments ne se suivent pas simplement mais occupent des zones spécifiques de l'écran.