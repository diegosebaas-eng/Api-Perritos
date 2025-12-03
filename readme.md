# 🐕 API de Perritos

API REST desarrollada con Node.js y Express para gestionar información de perros. Incluye una base de datos en memoria con 100 perros de diferentes razas.

## 📋 Descripción

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de perros. Es ideal para aprender desarrollo de APIs REST o como proyecto base para aplicaciones más complejas.

## 🚀 Características

- ✅ Listado completo de 100 perros con diferentes razas
- ✅ Consulta individual de perros por ID
- ✅ Creación de nuevos perros
- ✅ Actualización de información existente
- ✅ Eliminación de perros
- ✅ Base de datos en memoria (sin necesidad de configuración)

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express.js v5.2.1** - Framework web minimalista

## 📦 Instalación

### Requisitos previos
- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

### Pasos

1. Clona el repositorio:
```bash
git clone https://github.com/diegosebaas-eng/Api-Perritos.git
```

2. Navega al directorio del proyecto:
```bash
cd Api-Perritos
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor:
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3000`

## 📖 Uso de la API

### Endpoints disponibles

#### 1. Obtener todos los perros
```http
GET /perros
```

**Respuesta exitosa (200):**
```json
[
  {
    "id": 1,
    "nombre": "Max",
    "raza": "Labrador",
    "edad": 3
  },
  ...
]
```

#### 2. Obtener un perro específico
```http
GET /perros/:id
```

**Ejemplo:**
```http
GET /perros/1
```

**Respuesta exitosa (200):**
```json
{
  "id": 1,
  "nombre": "Max",
  "raza": "Labrador",
  "edad": 3
}
```

**Error (404):**
```json
{
  "mensaje": "Perro no encontrado"
}
```

#### 3. Crear un nuevo perro
```http
POST /perros
Content-Type: application/json
```

**Body:**
```json
{
  "nombre": "Firulais",
  "raza": "Mestizo",
  "edad": 3
}
```

**Respuesta exitosa (201):**
```json
{
  "id": 101,
  "nombre": "Firulais",
  "raza": "Mestizo",
  "edad": 3
}
```

#### 4. Actualizar un perro existente
```http
PUT /perros/:id
Content-Type: application/json
```

**Body (todos los campos son opcionales):**
```json
{
  "nombre": "Max Actualizado",
  "raza": "Labrador Dorado",
  "edad": 4
}
```

**Respuesta exitosa (200):**
```json
{
  "id": 1,
  "nombre": "Max Actualizado",
  "raza": "Labrador Dorado",
  "edad": 4
}
```

#### 5. Eliminar un perro
```http
DELETE /perros/:id
```

**Respuesta exitosa (200):**
```json
{
  "mensaje": "Perro eliminado correctamente"
}
```

## 🧪 Probar la API

### Con Postman
1. Descarga e instala [Postman](https://www.postman.com/downloads/)
2. Importa la colección o crea requests manualmente
3. Asegúrate de que el servidor esté corriendo
4. Realiza las peticiones a `http://localhost:3000/perros`

### Con cURL
```bash
# Obtener todos los perros
curl http://localhost:3000/perros

# Obtener un perro específico
curl http://localhost:3000/perros/1

# Crear un nuevo perro
curl -X POST http://localhost:3000/perros \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Rex","raza":"Pastor Alemán","edad":2}'

# Actualizar un perro
curl -X PUT http://localhost:3000/perros/1 \
  -H "Content-Type: application/json" \
  -d '{"edad":5}'

# Eliminar un perro
curl -X DELETE http://localhost:3000/perros/1
```

## 📁 Estructura del Proyecto

```
Api-Perritos/
├── node_modules/       # Dependencias (no se sube a Git)
├── .gitignore          # Archivos ignorados por Git
├── index.js            # Archivo principal de la API
├── package.json        # Configuración del proyecto
├── package-lock.json   # Versiones exactas de dependencias
└── README.md           # Este archivo
```

## 🐾 Razas Incluidas

La API incluye 100 perros con razas variadas como:
- Labrador, Golden Retriever, Pastor Alemán
- Husky Siberiano, Beagle, Bulldog Francés
- Border Collie, Poodle, Rottweiler
- Y muchas más...

## 🔧 Personalización

### Agregar más perros
Edita el array `perros` en `index.js` para agregar más datos iniciales.

### Cambiar el puerto
Modifica la constante `PORT` en `index.js`:
```javascript
const PORT = 3000; // Cambia al puerto que prefieras
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📝 Notas

- Esta API usa almacenamiento en memoria, los datos se pierden al reiniciar el servidor
- Para un proyecto en producción, considera usar una base de datos real (MongoDB, PostgreSQL, etc.)
- No incluye autenticación ni autorización

## 📄 Licencia

ISC

## 👤 Autor

**Diego Sebastián**
- GitHub: [@diegosebaas-eng](https://github.com/diegosebaas-eng)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub
