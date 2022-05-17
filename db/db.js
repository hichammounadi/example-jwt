const Sequelize = require('sequelize')


const sequelize = new Sequelize(
    'exampleJWT',
    'root',
    'Testing321#',
    {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306
    }
)


module.exports = sequelize