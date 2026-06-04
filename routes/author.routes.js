// routes/authors.routes.js 
const express = require("express"); 
const router = express.Router(); 

// datos en memoria (temporal)
const authors = [];
 
router.get("/", (req, res) => { 
  res.json(authors); 
}); 
 
router.post("/", (req, res) => { 
  // Crear autor 
}); 
 
module.exports = router; 