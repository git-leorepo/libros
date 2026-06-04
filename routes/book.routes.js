//llamar express
const express = require("express");
const router = express.Router();

// datos desde el archivo data/books.js
const { books } = require("../data/books");

//llamados desde books.controllers.js
const { createBook, getBookId, updateBook, deleteBook} = require("../controllers/books.controllers");

//GET /books - LIstar los libros
router.get("/", (req, res) => {
    res.json(books);
});

// POST /books - Crear nuevo libro 
router.post("/", createBook); 
 
// GET /books/:id - Obtener libro por ID 
router.get("/:id", getBookId); 
 
// PUT /books/:id - Actualizar libro 
router.put("/:id", updateBook);

// DELETE /books/:id - Eliminar libro 
router.delete("/:id", deleteBook); 

module.exports = router;

