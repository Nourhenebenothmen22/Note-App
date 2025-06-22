const express=require('express')
const router=express.Router()
const NotesControllers=require('../Controllers/NotesControllers')
router.get('/notes', NotesControllers.getAllNotes);

// 🔽 GET une note par ID
router.get('/notes/:id', NotesControllers.getNoteById);

// 🔽 POST une nouvelle note
router.post('/notes', NotesControllers.createNote);

// 🔽 PUT mise à jour d'une note existante
router.put('/notes/:id',NotesControllers.updateNote);

// 🔽 DELETE une note par ID
router.delete('/notes/:id', NotesControllers.deleteNote);
module.exports=router