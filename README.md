# Books API

REST API construida con Node.js y Express para gestionar libros y autores.

## 🛠️ Tecnologías

- Node.js
- Express
- dotenv

## 📦 Instalación

```bash
npm install
```

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto:

```
PORT=3000
NODE_ENV=development
```

## 🚀 Ejecutar el servidor

```bash
npm run dev
```

El servidor se inicia en `http://localhost:3000` con recarga automática al guardar cambios.

## 📁 Estructura del proyecto

```
├── config/
│   └── config.js           # Variables de entorno centralizadas
├── controllers/
│   └── books.controllers.js # Lógica de cada endpoint de libros
├── data/
│   └── books.js            # Datos en memoria
├── routes/
│   ├── book.routes.js      # Rutas de libros
│   └── author.routes.js    # Rutas de autores
├── .env                    # Variables de entorno (no subir a git)
└── index.js                # Punto de entrada de la aplicación
```

## 🔗 Endpoints

### General

| Método | URL       | Descripción              |
|--------|-----------|--------------------------|
| GET    | `/`       | Mensaje de bienvenida    |
| GET    | `/health` | Estado del servidor      |

### Libros

| Método | URL           | Descripción              |
|--------|---------------|--------------------------|
| GET    | `/books`      | Listar todos los libros  |
| GET    | `/books/:id`  | Obtener libro por ID     |
| POST   | `/books`      | Crear nuevo libro        |
| PUT    | `/books/:id`  | Actualizar libro         |
| DELETE | `/books/:id`  | Eliminar libro           |

### Autores

| Método | URL        | Descripción               |
|--------|------------|---------------------------|
| GET    | `/authors` | Listar todos los autores  |
| POST   | `/authors` | Crear nuevo autor         |

## 📝 Ejemplos de uso

### Crear un libro

```http
POST /books
Content-Type: application/json

{
  "title": "El Principito",
  "author": "Antoine de Saint-Exupéry",
  "isbn": "978-0156012195"
}
```

### Actualizar un libro

```http
PUT /books/1
Content-Type: application/json

{
  "title": "Nuevo título"
}
```

## ⚠️ Notas

> Los datos se almacenan en memoria. Al reiniciar el servidor, los cambios se pierden.
