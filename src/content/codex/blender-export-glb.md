---
title: "Le Sceau de Transmutation"
subtitle: "Exporter en GLB/GLTF pour le Web"
publishDate: 2026-01-14
tags: ["Blender", "Pipeline", "GLTF", "Export"]
domain: "3D"
concept2D: "Enregistrer un fichier en 'JPEG pour le Web' avec les bons réglages de compression."
mecanique: "Configurer les paramètres de l'exportateur GLTF 2.0 pour optimiser la taille et la compatibilité."
vision3D: "L'export n'est pas une simple sauvegarde. C'est un rituel qui enferme l'essence du modèle dans un cristal (le fichier .glb) pour son voyage vers le monde du navigateur. Un rituel mal exécuté peut briser le cristal ou en altérer le contenu."
status: "À explorer"
---

Le format `.glb` (GLTF Binaire) est le vaisseau qui transportera votre création. Le configurer correctement, c'est s'assurer que le voyage se fasse sans perte et que le modèle arrive intact et léger.

### La Check-list du Rituel d'Exportation (`Fichier > Exporter > gLTF 2.0`)

1.  **Format :**
    *   Choisissez **`gLTF Binaire (.glb)`**. Il contient tout (modèle, textures, animations) en un seul fichier, plus simple à gérer dans le code.

2.  **Onglet `Inclure` :**
    *   **`Objets sélectionnés` :** Cochez **toujours** cette case. Vous ne voulez exporter que votre personnage, pas les lumières ou caméras de votre scène de travail.
    *   **`Propriétés personnalisées` :** Utile pour passer des données de Blender au code.
    *   **`Caméras` / `Lumières directionnelles` :** Décochez-les. La lumière et la caméra doivent être gérées par Three.js pour un contrôle total.

3.  **Onglet `Transformation` :**
    *   **`+Y vers le Haut` :** Toujours coché. C'est la convention de Three.js.

4.  **Onglet `Géométrie` :**
    *   **`Appliquer les modificateurs` :** Cochez cette case, sauf si vous utilisez des Shape Keys (morphings) pour la déformation.
    *   **`Compression` :** **Activez-la !** C'est le secret pour des modèles légers qui se chargent vite. L'algorithme Draco de Google est extrêmement efficace.

5.  **Onglet `Animation` :**
    *   **`Animer les actions` :** Cochez cette case.
    *   **`Élaguer les animations` :** Cochez pour enlever les images-clés inutiles qui alourdissent le fichier.