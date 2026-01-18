---
title: "Déconstruction pour un Nouveau Souffle"
publishDate: 2026-01-18
tags: ["Architecture", "Pivot", "Blueprint", "GSAP", "State Management"]
---

**Log de Construction #04**

**Statut :** Pivot structurel / Phase de Blueprint

**Sujet :** Abandon du modèle actuel pour la Voie du "Slide Navigator"

### 1. Le Constat du Mécanicien

Après avoir testé l'architecture actuelle, le verdict tombe : les pièces s'emboîtent, mais le moteur ne tourne pas rond. L'expérience manque de fluidité, le "souffle de vie" (Hebel) s'éparpille dans une structure trop complexe qui ne rend pas hommage à l'esthétique *Storybook* que je vise.

Vouloir construire la carrosserie avant d'avoir stabilisé le châssis est une erreur de débutant que je choisis de corriger aujourd'hui.

### 2. La Voie du "Slide Navigator"

Je décide de revenir à l'essentiel : **la narration séquentielle**. Plutôt qu'un site web classique, je vais structurer l'expérience comme une galerie interactive, un "PowerPoint 3D" où chaque vue est une étape clé de mon pèlerinage.

Ce choix s'impose pour plusieurs raisons :
*   **Contrôle du Flux :** Chaque "slide" devient une scène Three.js maîtrisée (position caméra, éclairage, UI spécifique).
*   **Clarté Narrative :** On ne se perd plus dans le site ; on tourne les pages d'un grimoire numérique.
*   **Prototypage Rapide :** Cela me permet de valider le passage de l'écran titre au menu "Hebel", puis à la Timeline, avec la précision d'un mécanicien qui règle ses soupapes.

### 3. Prochaines Étapes (Le Blueprint)

Le chantier se concentre désormais sur le **"State Controller"**. Il s'agira de définir un tableau d'objets contenant les coordonnées de chaque scène, puis d'utiliser **GSAP** pour créer des transitions fluides entre ces "slides", simulant un voyage cinématographique. Les calques d'interface HTML resteront superposés au canvas pour garantir une accessibilité totale.

*Le grain de sable ne s'arrête pas, il change de trajectoire pour mieux dessiner l'oasis.*