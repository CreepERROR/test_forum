# **Rapport sur l'Application : Forum Interactif avec Nuxt.JS**

 ## **Introduction :**

Ce rapport documente le processus de développement de l'application "Forum Interactif" réalisée avec Nuxt.JS. L'objectif de ce projet était de créer un forum en ligne interactif permettant aux utilisateurs de créer des sujets, de poster des messages et de les consulter en temps réel.

## **Description de l'Application :**

L'application "Forum Interactif" permet aux utilisateurs de créer des comptes, de créer des sujets de discussion, de répondre aux sujets existants et d'interagir en temps réel avec d'autres utilisateurs. Les fonctionnalités principales comprennent la gestion des utilisateurs avec différents niveaux de droits, la création et la suppression de sujets, la pagination des sujets et des messages, ainsi que l'actualisation en temps réel des sujets et des messages grâce à l'utilisation de WebSockets.

## **Choix Techniques :**

1. **Framework Frontend :** Nous avons choisi d'utiliser Nuxt.JS pour le développement de l'application en raison de sa facilité d'utilisation, de sa capacité à gérer le SSR (Server-Side Rendering) et de sa compatibilité avec Vue.js.

2. **Framework UI :** Pour l'interface utilisateur, nous avons opté pour Vuetify 3 en raison de sa richesse en composants pré-conçus et de son intégration aisée avec Nuxt.JS.

3. **Communication en Temps Réel :** Nous avons utilisé des WebSockets pour permettre une communication en temps réel entre les utilisateurs et le serveur. Cependant, nous avons rencontré des difficultés dans la mise en place de cette fonctionnalité, ce qui a entraîné des retards dans le développement.

4. **Stockage de Données :** Les données ont été stockées dans une base de données MySQL. Nous avons choisi MySQL en raison de sa popularité, de sa fiabilité et de sa facilité d'intégration avec Nuxt.JS.

5. **Conteneurisation :** L'application a été packagée dans un conteneur Docker, ce qui permet une mise en production facile et une portabilité accrue.

**Difficultés Rencontrées :**

1. **Problèmes avec les WebSockets :** La mise en place des WebSockets a été plus complexe que prévu. Malgré nos efforts pour configurer le serveur WebSocket et gérer les événements de manière appropriée, nous avons rencontré des problèmes de connectivité qui ont affecté la fonctionnalité en temps réel de l'application.

## **Conclusion :**

En conclusion, le développement de l'application "Forum Interactif" avec Nuxt.JS a été une expérience enrichissante malgré les défis rencontrés. Nous avons réussi à mettre en œuvre de nombreuses fonctionnalités essentielles d'un forum en ligne, mais les difficultés rencontrées avec les WebSockets ont nécessité des ajustements supplémentaires. Ce projet nous a permis d'acquérir une compréhension approfondie des technologies web modernes telles que Nuxt.JS, Vuetify et l'utilisation de WebSockets pour la communication en temps réel.

---

Groupe Gallion Laura, Hugot Benjamin ADWM-2

