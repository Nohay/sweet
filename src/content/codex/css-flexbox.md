---
title: "L'Alignement des Souffles"
subtitle: "CSS Flexbox"
publishDate: 2026-01-14
tags: ["CSS", "Layout", "Flexbox"]
domain: "Web Dev"
concept2D: "Centrer un texte verticalement dans un bloc, avec des astuces."
mecanique: "Un modèle de boîte unidimensionnel qui permet de distribuer l'espace et d'aligner des éléments le long d'un axe principal (horizontal ou vertical)."
vision3D: "Imaginez des âmes (des objets) flottant en ligne. Flexbox est le vent qui les pousse pour les regrouper, les espacer ou les centrer. C'est un souffle directionnel, parfait pour organiser des éléments qui se suivent, comme une barre de navigation ou une liste d'attributs."
status: "Acquis"
---

Flexbox (Flexible Box Layout) a été une révolution pour les développeurs web. Il a rendu simple ce qui était auparavant complexe : l'alignement et la distribution d'éléments dans un conteneur.

### La Philosophie de l'Axe

Flexbox est **unidimensionnel**. Il ne raisonne que sur un seul axe à la fois :
*   **L'axe principal (`justify-content`) :** Comment les éléments se répartissent-ils le long de la direction principale (par défaut, de gauche à droite) ? Sont-ils au début, à la fin, au centre, ou avec un espace égal entre eux ?
*   **L'axe secondaire (`align-items`) :** Comment les éléments s'alignent-ils sur l'axe perpendiculaire ? Sont-ils en haut, en bas, au centre, ou étirés pour remplir l'espace ?

C'est l'outil idéal pour les composants d'interface : barres de navigation, en-têtes de cartes, listes... partout où des éléments doivent être organisés en ligne ou en colonne.