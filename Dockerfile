# ---- Étape 1 : Build ----
# On utilise une image Node.js (version Alpine pour sa légèreté) pour construire le projet.
# L'alias "builder" nous permettra de réutiliser son contenu plus tard.
FROM node:20-alpine AS builder

# On définit le répertoire de travail dans le conteneur.
WORKDIR /app

# On copie les fichiers de dépendances.
COPY package*.json ./

# On installe les dépendances du projet.
# On utilise "npm ci" (Clean Install) qui est plus robuste pour les builds Docker.
RUN npm ci

# On copie tout le reste du code source.
COPY . .

# On lance la commande de build d'Astro.
RUN npm run build

# ---- Étape 2 : Serve ----
# On part d'une image Nginx très légère pour servir nos fichiers statiques.
FROM nginx:stable-alpine

# On copie uniquement le résultat du build (le dossier /app/dist) de l'étape "builder"
# dans le dossier par défaut de Nginx qui sert les pages web.
COPY --from=builder /app/dist /usr/share/nginx/html

# On expose le port 80 pour pouvoir accéder au serveur Nginx depuis l'extérieur du conteneur.
EXPOSE 80