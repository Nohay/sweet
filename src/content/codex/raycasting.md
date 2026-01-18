---
title: "Le Regard et le Toucher"
subtitle: "Raycasting"
publishDate: 2026-01-15
tags: ["Physique du Sable", "Interaction"]
domain: "3D"
concept2D: "États :hover et :active des boutons"
mecanique: "Lancer un rayon depuis la caméra pour détecter les intersections avec les objets de la scène."
vision3D: "Le regard qui devient une main. Le simple fait de poser les yeux sur un objet peut altérer sa matière (changement de shader), déclencher un son, ou le faire léviter. C'est le premier pas vers une interaction sans interface visible."
status: "Acquis"
---

### La Dissection du Grain

Le Raycasting est le pont entre le monde 2D de l'écran et l'espace 3D de la scène. En projetant un rayon invisible depuis la position de la souris (ou du centre de la caméra), nous pouvons lister tous les objets qu'il traverse.

C'est le mécanisme fondamental qui nous permet de répondre à la question : "Qu'est-ce que le visiteur est en train de regarder ?". Il remplace la logique du DOM où l'on attache des `event listeners` à des boîtes HTML. Ici, l'événement est attaché à la direction du regard lui-même. C'est la mécanique derrière le "regard" ou la "main" du visiteur dans notre univers.

### Le Journal de Transmutation

Le passage du `:hover` CSS au Raycasting est un saut paradigmatique. On ne décore plus une boîte, on interroge l'espace. Le feedback n'est plus un simple changement de couleur, mais peut devenir une réaction physique de l'objet lui-même, lui donnant l'illusion d'être conscient de notre présence.