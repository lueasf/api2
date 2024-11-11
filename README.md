# API REST 2

init:

```
npm init
npm i express mongoose
npm i --save-dev nodemon dotenv
```
express : serveur
mongoose : base de données
nodemon : redémarrage auto du serveur
dotenv : var d'env


## Architecture : API REST avec Express et MongoDB
3 Fichiers sont nécéssaires seulement :
* server.js :
    * Point d'entrée de l'app
    * Importe les var d'env
    * Création du serveur
    * Connexion à la bd
    * Importe les routes (followers.js)

* followers.js :
    * Définit les routes
        * Les méthodes de mongoose utilisées sont : .find(), .save(), .findById(), .deleteOne()
    * Importe le modèle (follower.js)
    * On utilise le middleware getFollower pour récupérer un follower par son id
 
* follower.js :
    * Définit le modèle de donnée du follower en JSON


### Middleware
Pour rappel :
```
app.use(express.json()) 
```
permet de parser le body en json avant de le passer à la route. C'est un middleware.
```
{
    "name": "Jojo"
}
```
Avec le middleware, on peut accéder à name avec :
```
req.body.name
```

### MongoDB
C'est une base de données NoSQL. On fait tourner une instance en local.
Mongoose est une lib Node.js pour manip les données.

## Test de l'API
Pour tester cette API très basique, pas besoin de Postman ou Insomnia, j'utilise une extension vscode : REST Client.
Il suffit de créer un fichier .rest et de lancer les requêtes.
