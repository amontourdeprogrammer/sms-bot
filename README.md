# Sms-bot
Bot will send SMS after a topic is created on "A mon tour de programmer" community

What we need to do :
- Parse discourse API Json to get all topics
- extract author + topic title + ID
- stocker dans une variable les ID
- reparser l'api et verifier s'il y a un nouvel ID
- si oui, on envoie un sms !!!!

questions :
- est-ce que l'API json nous renvoie tous les latest
- faire une tache Cron quand on sera en prod


SMS : Auteur du sujet + Titre + lien

Idées d’outils —>
Twillio pour les sms

## Setup 

* `npm install`

Le data.json doit contenir au minimum un tableau vide;
Pour lancer le bot 
`node bot.js`

