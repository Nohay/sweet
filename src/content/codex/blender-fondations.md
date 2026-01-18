---
title: "La Discipline de la Forme"
subtitle: "Préparer le Modèle pour le Souffle"
publishDate: 2026-01-14
tags: ["Blender", "Pipeline", "Optimisation"]
domain: "3D"
concept2D: "Nettoyer un fichier SVG avant de l'importer"
mecanique: "Appliquer les transformations, vérifier l'orientation et nettoyer la géométrie d'un modèle 3D."
vision3D: "Le corps de l'avatar n'est pas qu'une forme, c'est un réceptacle. S'il est impur ou mal orienté, le souffle de vie (l'animation) sera corrompu ou s'exprimera de travers. C'est l'art de préparer un golem parfait avant le rituel d'animation."
status: "À explorer"
---

Avant même de murmurer la formule d'exportation, le pèlerin doit s'assurer que son réceptacle est pur. Un modèle mal préparé dans Blender se manifestera dans Three.js comme une entité tordue, décalée ou gigantesque.

### La Check-list des Fondations

1.  **Le Centre du Monde :**
    *   **Mécanique :** Assurez-vous que votre personnage est au centre de la scène (Origine du Monde : 0, 0, 0). Son origine (le petit point orange) doit être idéalement entre ses pieds.
    *   **Vision :** L'avatar doit être ancré dans la réalité de votre monde. S'il naît décalé, il sera toujours un étranger.

2.  **L'Échelle de la Réalité :**
    *   **Mécanique :** Appliquez toutes les transformations avec `Ctrl + A` > `Toutes les transformations`. L'échelle de votre objet doit être de `(1, 1, 1)`.
    *   **Vision :** Un avatar dont l'échelle n'est pas appliquée peut apparaître 100 fois trop grand ou trop petit dans la scène Three.js. C'est la différence entre un dieu et un insecte.

3.  **Le Regard vers l'Avant :**
    *   **Mécanique :** Votre modèle doit faire face à l'axe **-Y** (Avant). C'est la convention pour que la commande `lookAt()` de Three.js fonctionne intuitivement.
    *   **Vision :** Le regard de votre création doit être aligné avec son intention. S'il regarde de côté, il avancera en crabe, son corps trahissant son âme.

4.  **La Pureté de la Géométrie :**
    *   **Mécanique :** En mode `Édition`, sélectionnez tout (`A`) et utilisez `M` > `Par distance` pour fusionner les sommets en double. Recalculez les normales avec `Shift + N`.
    *   **Vision :** Les sommets dupliqués sont des fractures dans l'âme du modèle. Les normales inversées sont des morceaux de peau retournés. Ces impuretés créent des artefacts visuels, des cicatrices sombres là où la lumière devrait être.

5.  **Nommer, c'est Invoquer :**
    *   **Mécanique :** Donnez des noms clairs à vos objets (`Corps`, `Yeux`, `Armature`) et à vos matériaux.
    *   **Vision :** Un nom est une incantation. Il vous permettra, dans le code, d'invoquer une partie précise du corps pour la modifier, comme si vous appeliez son véritable nom.