const express = require('express');
const app = express();
const aspirantesRoutes = require('./routers/aspirantesRoutes');
const profesionesRoutes = require('./routers/profesionesRoutes');
const cors = require('cors'); // Importa cors
const Sequelize = require('sequelize'); // Importa Sequelize

// Middleware para manejar solicitudes JSON
app.use(express.json());
// Configuración de CORS 
app.use(cors())
// Rutas de la API
app.use('/', aspirantesRoutes);
app.use('/', profesionesRoutes);



  //origin: 'http://localhost:5173',
 // methods: 'GET,POST',
 // allowedHeaders: 'Content-Type,Authorization'
//}));
 app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}); 



// Configuración de la base de datos
const dbConfig = require('./data/config/config');
const sequelize = new Sequelize(dbConfig.development.database, dbConfig.development.username, dbConfig.development.password, {
  host: dbConfig.development.host,
  dialect: dbConfig.development.dialect
});

// Verifica la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Puerto de escucha del servidor
app.listen(3030, () => {
    console.log("Servidor corriendo en http://localhost:3030");
});
