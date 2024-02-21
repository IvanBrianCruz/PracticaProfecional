module.exports = (sequelize, DataTypes) => {
  let alias = 'Aspirantes'; // Corregido el alias
  let columns = { // Corregido el nombre de la variable columns
    idAspirante: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    perfilUrlLinkedin: {
      type: DataTypes.STRING,
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
    },
    sexo: {
      type: DataTypes.STRING,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    idProfesion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };
  let config = {
    tableName: 'aspirantes',
    timestamps: false,
  };
  const Aspirantes = sequelize.define(alias, columns, config); // Corregido el nombre de la variable Aspirantes

  Aspirantes.associate = (models) => { // Corregido el nombre de la variable Aspirantes
    Aspirantes.belongsTo(models.Profesiones, { foreignKey: 'idProfesion' }); // Corregido el nombre de la relación y el modelo asociado
  };

  return Aspirantes;
};
