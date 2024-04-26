# projet-10-seas-only-front


## Intégration des maquettes avant codage des composants

Un dossier **_inte** est présent à la racine du repo


### Convention de nommage CSS

Utilise la méthode BEM
https://writecode.fr/tutoriel/la-methode-bem-pour-le-css


### Séparation des fichiers SCSS

Les CSS étant partagés par toutes les pages, pour l'inté les styles ont été séparés au plusieurs fichiers, tous importé par un fichier **core.scss** appelé par le **style.scss** situé à la racine du projet.

En dehors des composants, ces fichiers servent aussi bien à styler l'inté que l'App React pour ne pas avoir à les copier à deux endroits de l'arborescence du projet. Ce qui signifie que au fur et à mesure qu'on avancera dans l'inté, certains styles de layout ou de modules de page ne seront plus nécessaires et devront etres retirés (on devra donc se parler et bien se tenir au courant).

Un fichier **_config.scss** de variables utilisables pour les maquettes (valeurs à définir ensemble)  est présent dans le dossier "config".


### Les templates HTML

Les templates HTML sont situés dans un répertoire **template**