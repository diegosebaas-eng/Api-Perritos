const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Base de datos simulada de perros
let perros = [
  { id: 1, nombre: "Max", raza: "Labrador", edad: 3 },
  { id: 2, nombre: "Bella", raza: "Golden Retriever", edad: 2 },
  { id: 3, nombre: "Rocky", raza: "Pastor Alemán", edad: 4 },
  { id: 4, nombre: "Luna", raza: "Husky Siberiano", edad: 2 },
  { id: 5, nombre: "Charlie", raza: "Beagle", edad: 5 },
  { id: 6, nombre: "Daisy", raza: "Bulldog Francés", edad: 1 },
  { id: 7, nombre: "Cooper", raza: "Border Collie", edad: 3 },
  { id: 8, nombre: "Lucy", raza: "Poodle", edad: 4 },
  { id: 9, nombre: "Buddy", raza: "Cocker Spaniel", edad: 6 },
  { id: 10, nombre: "Sadie", raza: "Rottweiler", edad: 3 },
  { id: 11, nombre: "Duke", raza: "Boxer", edad: 2 },
  { id: 12, nombre: "Lola", raza: "Chihuahua", edad: 7 },
  { id: 13, nombre: "Bailey", raza: "Dálmata", edad: 4 },
  { id: 14, nombre: "Molly", raza: "Shih Tzu", edad: 5 },
  { id: 15, nombre: "Jack", raza: "Jack Russell Terrier", edad: 3 },
  { id: 16, nombre: "Sophie", raza: "Pomerania", edad: 2 },
  { id: 17, nombre: "Toby", raza: "Schnauzer", edad: 6 },
  { id: 18, nombre: "Chloe", raza: "Yorkshire Terrier", edad: 4 },
  { id: 19, nombre: "Bear", raza: "San Bernardo", edad: 5 },
  { id: 20, nombre: "Maggie", raza: "Akita", edad: 3 },
  { id: 21, nombre: "Zeus", raza: "Doberman", edad: 4 },
  { id: 22, nombre: "Penny", raza: "Basset Hound", edad: 5 },
  { id: 23, nombre: "Oliver", raza: "Weimaraner", edad: 2 },
  { id: 24, nombre: "Ruby", raza: "Maltés", edad: 6 },
  { id: 25, nombre: "Tucker", raza: "Terranova", edad: 3 },
  { id: 26, nombre: "Coco", raza: "Bichón Frisé", edad: 4 },
  { id: 27, nombre: "Bentley", raza: "Bulldog Inglés", edad: 2 },
  { id: 28, nombre: "Stella", raza: "Pitbull", edad: 5 },
  { id: 29, nombre: "Murphy", raza: "Corgi", edad: 3 },
  { id: 30, nombre: "Rosie", raza: "Shar Pei", edad: 4 },
  { id: 31, nombre: "Oscar", raza: "Gran Danés", edad: 2 },
  { id: 32, nombre: "Zoey", raza: "Papillón", edad: 6 },
  { id: 33, nombre: "Leo", raza: "Samoyedo", edad: 3 },
  { id: 34, nombre: "Lily", raza: "Pug", edad: 5 },
  { id: 35, nombre: "Milo", raza: "Australian Shepherd", edad: 2 },
  { id: 36, nombre: "Zoe", raza: "Boston Terrier", edad: 4 },
  { id: 37, nombre: "Diesel", raza: "Malamute de Alaska", edad: 5 },
  { id: 38, nombre: "Nala", raza: "Shiba Inu", edad: 3 },
  { id: 39, nombre: "Gus", raza: "Pointer Alemán", edad: 4 },
  { id: 40, nombre: "Roxy", raza: "Cavalier King Charles", edad: 2 },
  { id: 41, nombre: "Thor", raza: "Mastín Inglés", edad: 6 },
  { id: 42, nombre: "Emma", raza: "Bloodhound", edad: 5 },
  { id: 43, nombre: "Bruno", raza: "Cane Corso", edad: 3 },
  { id: 44, nombre: "Gracie", raza: "Vizsla", edad: 2 },
  { id: 45, nombre: "Apollo", raza: "Rhodesian Ridgeback", edad: 4 },
  { id: 46, nombre: "Princess", raza: "Pekingese", edad: 7 },
  { id: 47, nombre: "Hank", raza: "Setter Irlandés", edad: 3 },
  { id: 48, nombre: "Willow", raza: "Lhasa Apso", edad: 5 },
  { id: 49, nombre: "Winston", raza: "Bullmastiff", edad: 4 },
  { id: 50, nombre: "Piper", raza: "Afghan Hound", edad: 2 },
  { id: 51, nombre: "Finn", raza: "Springer Spaniel", edad: 6 },
  { id: 52, nombre: "Maya", raza: "Basenji", edad: 3 },
  { id: 53, nombre: "Rex", raza: "Pastor Belga", edad: 4 },
  { id: 54, nombre: "Izzy", raza: "West Highland Terrier", edad: 5 },
  { id: 55, nombre: "Jax", raza: "American Bully", edad: 2 },
  { id: 56, nombre: "Ellie", raza: "Brittany Spaniel", edad: 3 },
  { id: 57, nombre: "Tank", raza: "Dogo Argentino", edad: 4 },
  { id: 58, nombre: "Honey", raza: "Havanese", edad: 6 },
  { id: 59, nombre: "Duke", raza: "Braco Alemán", edad: 5 },
  { id: 60, nombre: "Pepper", raza: "Scottish Terrier", edad: 7 },
  { id: 61, nombre: "Rocco", raza: "Staffordshire Terrier", edad: 3 },
  { id: 62, nombre: "Annie", raza: "Collie", edad: 4 },
  { id: 63, nombre: "Maverick", raza: "Airedale Terrier", edad: 2 },
  { id: 64, nombre: "Athena", raza: "Boerboel", edad: 5 },
  { id: 65, nombre: "Axel", raza: "Kelpie Australiano", edad: 3 },
  { id: 66, nombre: "Kona", raza: "Boyero de Berna", edad: 4 },
  { id: 67, nombre: "Ace", raza: "Pharaoh Hound", edad: 2 },
  { id: 68, nombre: "Blue", raza: "Catahoula", edad: 6 },
  { id: 69, nombre: "Moose", raza: "Irish Wolfhound", edad: 5 },
  { id: 70, nombre: "Hazel", raza: "Norwich Terrier", edad: 3 },
  { id: 71, nombre: "Brutus", raza: "Presa Canario", edad: 4 },
  { id: 72, nombre: "Ginger", raza: "Cairn Terrier", edad: 7 },
  { id: 73, nombre: "Gunner", raza: "Belgian Malinois", edad: 2 },
  { id: 74, nombre: "Olive", raza: "Soft Coated Wheaten", edad: 5 },
  { id: 75, nombre: "Atlas", raza: "Anatolian Shepherd", edad: 3 },
  { id: 76, nombre: "Ivy", raza: "Italian Greyhound", edad: 4 },
  { id: 77, nombre: "King", raza: "Leonberger", edad: 6 },
  { id: 78, nombre: "Winnie", raza: "Clumber Spaniel", edad: 5 },
  { id: 79, nombre: "Boomer", raza: "Plott Hound", edad: 3 },
  { id: 80, nombre: "Paisley", raza: "Keeshond", edad: 2 },
  { id: 81, nombre: "Scout", raza: "Treeing Walker Coonhound", edad: 4 },
  { id: 82, nombre: "Nova", raza: "Xoloitzcuintli", edad: 5 },
  { id: 83, nombre: "Ranger", raza: "Black Russian Terrier", edad: 3 },
  { id: 84, nombre: "Millie", raza: "English Setter", edad: 6 },
  { id: 85, nombre: "Bandit", raza: "Coonhound", edad: 4 },
  { id: 86, nombre: "Poppy", raza: "Japanese Chin", edad: 7 },
  { id: 87, nombre: "Cash", raza: "Chesapeake Bay Retriever", edad: 2 },
  { id: 88, nombre: "Fiona", raza: "Tibetan Mastiff", edad: 5 },
  { id: 89, nombre: "Blaze", raza: "Canaan Dog", edad: 3 },
  { id: 90, nombre: "Harley", raza: "American Eskimo", edad: 4 },
  { id: 91, nombre: "Marley", raza: "Flat-Coated Retriever", edad: 2 },
  { id: 92, nombre: "Pearl", raza: "Sussex Spaniel", edad: 6 },
  { id: 93, nombre: "Spike", raza: "Miniature Pinscher", edad: 5 },
  { id: 94, nombre: "Angel", raza: "Silky Terrier", edad: 3 },
  { id: 95, nombre: "Hunter", raza: "Norwegian Elkhound", edad: 4 },
  { id: 96, nombre: "Duchess", raza: "English Toy Spaniel", edad: 7 },
  { id: 97, nombre: "Jagger", raza: "Kuvasz", edad: 2 },
  { id: 98, nombre: "Sasha", raza: "Finnish Spitz", edad: 5 },
  { id: 99, nombre: "Beau", raza: "Otterhound", edad: 3 },
  { id: 100, nombre: "Luna", raza: "Perro de Agua Español", edad: 4 }
];

// GET - Obtener todos los perros
app.get('/perros', (req, res) => {
  res.json(perros);
});

// GET - Obtener un perro por ID
app.get('/perros/:id', (req, res) => {
  const perro = perros.find(p => p.id === parseInt(req.params.id));
  if (!perro) {
    return res.status(404).json({ mensaje: "Perro no encontrado" });
  }
  res.json(perro);
});

// POST - Crear un nuevo perro
app.post('/perros', (req, res) => {
  const nuevoPerro = {
    id: perros.length > 0 ? Math.max(...perros.map(p => p.id)) + 1 : 1,
    nombre: req.body.nombre,
    raza: req.body.raza,
    edad: req.body.edad
  };
  perros.push(nuevoPerro);
  res.status(201).json(nuevoPerro);
});

// PUT - Actualizar un perro existente
app.put('/perros/:id', (req, res) => {
  const perro = perros.find(p => p.id === parseInt(req.params.id));
  if (!perro) {
    return res.status(404).json({ mensaje: "Perro no encontrado" });
  }
  
  perro.nombre = req.body.nombre || perro.nombre;
  perro.raza = req.body.raza || perro.raza;
  perro.edad = req.body.edad || perro.edad;
  
  res.json(perro);
});

// DELETE - Eliminar un perro
app.delete('/perros/:id', (req, res) => {
  const index = perros.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ mensaje: "Perro no encontrado" });
  }
  
  perros.splice(index, 1);
  res.json({ mensaje: "Perro eliminado correctamente" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});