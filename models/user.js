'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password_hash: { type: DataTypes.STRING, allowNull: false }
  }, {
    timestamps: true
  });
  User.associate = (models) => {
    User.hasMany(models.Ranking, { foreignKey: "user_id" });
    User.belongsToMany(models.User, {
      as: "Friends",
      through: models.Friendship,
      foreignKey: "user_id"
    });
  };
  return User;
};