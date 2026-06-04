//importa los datos desde /data/books.js
const { books } = require("../data/books");

//crear libros
const createBook = (req, res) => { 
  const { title, author, isbn } = req.body; 
   
  // Validación 
  if (!title || title.length < 3) { 
    return res.status(400).json({ error: "Title must be at least 3 characters" }); 
  } 
   
  // Lógica de negocio 
  const existingBook = books.find(b => b.isbn === isbn); 
  if (existingBook) { 
    return res.status(409).json({ error: "ISBN already exists" }); 
  } 
   
  // Crear recurso 
  const newBook = {  
    id: books.length + 1,  
    title,  
    author,  
    isbn, 
    createdAt: new Date().toISOString() 
  }; 
  books.push(newBook); 
   
  res.status(201).json(newBook); 
};

//Obtener libro by id
const getBookId = (req, res) => {
    const book = books.find(b => b.id === Number(req.params.id)); 
    if (!book) return res.status(404).json({ error: "Book not found" }); 
    res.json(book); 
}

//Actualizar libro
const updateBook = (req, res) => {
    const book = books.find(b => b.id === Number(req.params.id)); 
      if (!book) return res.status(404).json({ error: "Book not found" }); 
       
      const { title, author, isbn } = req.body; 
      if (title) book.title = title; 
      if (author) book.author = author;
      if (isbn) book.isbn = isbn;
      res.json(book);             
}

//Borrar libro
const deleteBook = (req, res) => {
    const index = books.findIndex(b => b.id === Number(req.params.id)); 
    if (index === -1) return res.status(404).json({ error: "Book not found" }); 
   
    books.splice(index, 1); 
    res.status(204).send();
}




module.exports = { createBook, getBookId, updateBook, deleteBook };