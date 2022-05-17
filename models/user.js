const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

// fonction cryptage mot de passe
User.beforeCreate(async (agent, options) => {
  const salt = await bcrypt.genSalt(10);
  agent.password = await bcrypt.hash(agent.password, salt);
});
User.prototype.createJWT = function () {
  return jwt.sign(
    {
      userId: this.id,
      userEmail: this.email,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};
User.prototype.comparePass = async function(userPassword){
    const isMatch = await bcrypt.compare(userPassword, this.password)
    return isMatch
}

module.exports = User;
