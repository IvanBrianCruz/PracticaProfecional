module.exports = (sequelize, DataTypes) => {
  let alias = 'Profesiones'; // Corregido el alias
  let columns = { // Corregido el nombre de la variable columns
    idProfesion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreProfesion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    tableName: 'profesiones',
    timestamps: false,
  };
  const Profesiones = sequelize.define(alias, columns, config); // Corregido el nombre de la variable Profesiones

  Profesiones.associate = (models) => { // Corregido el nombre de la variable Profesiones
    Profesiones.hasMany(models.Aspirantes, { // Corregido el nombre de la relación y el modelo asociado
      as: "Aspirantes",
      foreignKey: "idProfesion"
    });
  };

  return Profesiones;
};
