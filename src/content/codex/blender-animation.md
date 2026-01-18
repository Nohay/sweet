---
title: "L'Anatomie du Mouvement"
subtitle: "Animer pour le Web"
publishDate: 2026-01-14
tags: ["Blender", "Pipeline", "Animation", "Rigging"]
domain: "3D"
concept2D: "Créer un GIF animé à partir d'une séquence d'images."
mecanique: "Stocker plusieurs animations dans l'Éditeur d'actions non linéaires (NLA) pour les exporter en une seule fois."
vision3D: "Une statue qui bouge n'est pas vivante. Une créature vivante exprime une intention dans chaque mouvement. Le NLA Editor est le grimoire où l'on écrit les différents 'états d'âme' de l'avatar (marche, course, attente) pour pouvoir les invoquer à volonté dans le code."
status: "À explorer"
---

Le mouvement est la manifestation la plus pure du souffle de vie. Pour qu'il s'exprime dans Three.js, il doit être correctement catalogué dans Blender.

### La Check-list de l'Animateur

1.  **Une Armature, Un Corps :**
    *   **Mécanique :** Le maillage de votre personnage (`Mesh`) doit être parenté à un seul objet `Armature`. Évitez les armatures multiples.
    *   **Vision :** Le squelette est unique. Il est le conduit par lequel le souffle se propage dans tout le corps.

2.  **Le Grimoire des Actions (NLA Editor) :**
    *   **Mécanique :** Ne laissez pas vos animations en vrac. Pour chaque animation (ex: `marche`, `course`), allez dans l'éditeur d'actions, créez une nouvelle action, puis cliquez sur le bouton "Stocker l'action" (Push Down). Cela l'ajoute comme une "piste" dans l'éditeur NLA.
    *   **Vision :** Chaque piste est un chapitre de la vie de votre personnage. En les nommant correctement, vous pourrez dire à votre code : "Maintenant, lis le chapitre de la course" ou "Joue l'incantation de l'attente".

3.  **Exporter les Actions :**
    *   **Mécanique :** Dans les paramètres d'export GLB, sous l'onglet `Animation`, assurez-vous que "Animer les actions" est coché et que "Exporter les actions NLA" l'est aussi.
    *   **Vision :** C'est le sceau final qui lie tous les chapitres de votre grimoire d'animations au cristal `.glb` avant son grand voyage.

En suivant ces préceptes, vous pourrez, dans Three.js, charger votre modèle et accéder à un tableau de toutes ses animations par leur nom, prêt à insuffler le véritable Hebel à votre création.