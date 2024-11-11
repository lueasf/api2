const express = require('express');
const router = express.Router(); // pour creer des routes
const Follower = require('../models/follower') // pour importer le model

// Get all followers
router.get('/', async (req, res) => {   // async pour attendre la reponse de la bd
    try {
        const followers = await Follower.find() 
        res.json(followers)
    } catch (e){
        res.status(500).json({message: e.message})
    }
})

// Get 1 follower
router.get('/:id', getFollower, (req, res) => { // :id est un paramètre, gF est le middleware
    res.send(res.follower) // pour recuperer le paramètre dans la requête
})



// Create 1 follower
router.post('/', async (req, res) => {
    const follower = new Follower({
        name: req.body.name,
        following: req.body.following
    })
    try{
        const newFollower = await follower.save() // save() est une methode de mongoose pour sauvegarder dans la bd
        res.status(201).json(newFollower) // 201 pour crée
    } catch (e) {
        res.status(400).json({message: e.message}) // 400 pour bad request
    }
})



// Update 1 follower
router.patch('/:id', getFollower, async (req, res) => { // patch modifie juste les champs envoyés != put qui modifie tout
    if (req.body.name != null){
        res.follower.name = req.body.name
    }
    if (req.body.following != null){
        res.follower.following = req.body.following
    }
    try {
        const updatedFollower = await res.follower.save()
        res.json(updatedFollower);

    } catch (e) {
        res.status(400).json({message : e.message})
    }
})



// Delete 1 follower
router.delete('/:id', getFollower, async (req, res) => {
    try {
        await res.follower.deleteOne()
        res.json({message : 'deleted'})
    } catch (e) {
        res.status(500).json({message : e.message})
    }
})


// midleware pour recuperer un follower : s'exec avant les routes
async function getFollower(req, res, next){ // next pour passer à la suite
    let follower;
    try {
        follower = await Follower.findById(req.params.id) 
        if (follower == null){
            return res.status(404).json({message : 'Follower not found'})
        }
    } catch (e) {
        res.status(500).json({message: e.message})
    }
    res.follower = follower
    next()

}

module.exports = router; // pour exporter le router