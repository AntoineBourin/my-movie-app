Ce projet a été créé en support pédagogique pour la découverte et l'utilisation du framework Next.js, version 14 & 15.

## Installation

Ce projet est un projet Next.js version 15.

Il inclut notamment : 
- Next-auth pour permettre l'authentification, l'inscription
- Prisma pour inscrire des données dans la base de données (lorsqu'un utilisateur connecté ajoute un "J'aime" à un film/série)

### Installation des paquets
Commencez par installer le projet simplement avec Node version 18.18.0 minimum : 
```
npm install
```

### Configuration des variables d'environnement

Créez un compte sur [The Movie DB](https://www.themoviedb.org/) et demandez une clé API.

Une fois la clé API récupérée, vous devriez l'utiliser à la place de celle d'exemple sur votre fichier `.env`.

```
TMDB_API_KEY="xxxxxxx"
```

Cette étape est essentielle pour pouvoir récupérer la liste des films/séries à afficher sur l'application.

Le projet utilise Prisma pour créer, lire et ajouter des données dans une base de donnée. Pour des raisons de praticité, la base de donnée en locale sera un simple fichier `dev.db`. (Vous pouvez modifier avec une base de données Mongo, SQL... Pour cela, rendez-vous sur la [documentation de prisma](https://www.prisma.io/docs/orm/overview/introduction)).

### Configuration de Prisma

Avant le premier lancement de l'application, vous devrez initialiser Prisma.

```
npx prisma generate
```

## Lancer l'application

### Développement

```
npm run dev
```

### Production

```
npm run build
```