# Partie 1 

Le middleware est dans checkToken.ts
Il ne fonctionne pas car TypeScript ne comprend pas les types passés en paramètre d'une fonction middleware.
Il est malgré tout censé fonctionner.

Le UsersController a 2 méthodes Post car la méthode de connexion du front est mal faite.