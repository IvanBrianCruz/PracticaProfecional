const config = {
  "development": {
    "username": "root",
    "password": 'ivan4912134',
    "database": "recruitingrh",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  // otros entornos...
};

console.log(config); // Añade esta línea para verificar el objeto exportado

module.exports = config;
