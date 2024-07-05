const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

const Country = sequelize.define('Country', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country_code_two: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  country_code_three: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  mobile_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  continent_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const City = sequelize.define('City', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  long: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

const Airport = sequelize.define('Airport', {
  icao_code: {
    type: DataTypes.STRING(4),
    allowNull: false,
  },
  iata_code: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude_deg: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude_deg: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  elevation_ft: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define relationships between the models
Country.hasMany(City, { foreignKey: 'country_id' });
City.belongsTo(Country, { foreignKey: 'country_id' });

City.hasMany(Airport, { foreignKey: 'city_id' });
Airport.belongsTo(City, { foreignKey: 'city_id' });

module.exports = { Country, City, Airport };