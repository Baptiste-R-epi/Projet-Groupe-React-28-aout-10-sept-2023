Ceci est un projet de groupe qui a été réalisé en deux semaines, du 28 août au 10 septembre 2023.

L'objectif a été de récupérer des données d'une API externe pour les présenter à l'utilisateur.
Par défaut, nous utilisons la localisation, et présentons les prochains évenements répertoriés, triés par proximité dans le temps.
Il est possible de renseigner une ville, et de choisir une catégorie d'évenement (music, théatre...).

Le document Excel (Catégories.ods) a été nécéssaire au vu de la structure de l'API, où plusieurs catégories similaires pouvaient se résumer en une seul catégorie. L'excel génère un JSON, qui sera coller dans le fichier Client/src/utils/Categories_map.js.