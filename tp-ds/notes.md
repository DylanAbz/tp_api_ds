# Partie 1 

Le middleware est dans checkToken.ts
Il ne fonctionne pas car TypeScript ne comprend pas les types passés en paramètre d'une fonction middleware.
Il est malgré tout censé fonctionner.

Le UsersController a 2 méthodes Post car la méthode de connexion du front est mal faite.

# Partie 2 

Les responsabilités de connexion et création de l'utilisateur ne sont pas claires
On devrait avoir un AuthController qui gère uniquement l'identification ou la création de compte d'un utilisateur
Un autre controller devrait exister pour avoir les informations d'un utilisateur

Il faudrait changer le nom de la route me-connecter en login et le client devrait déjà hasher le mdp lorsqu'il fait la demande de login pour pas qu'il soit visible par quelqu'un qui intercepterait la trame.

Le MielsController ne devrait pas avoir et l'id et le prix en paramètre, l'id suffit pour retrouver le miel
Cela voudrait peut-être sous-entendre qu'un miel peut avoir 2 prix différents ce qui n'a pas de sens, on peut donc l'enlever de la route

Toutes les routes devraient être préfixés de ce qu'elles gèrent réellement

