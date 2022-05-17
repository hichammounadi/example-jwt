const User = require('../models/user')

/**
 *  fonction d'ajout un nouveau utilisateur
 * @param {*} data : attribue de classe USER
 */
const createUserService = (data) =>{
    const user = User.create(data)
    return user
}

const getUsersService = () => {
    const user = User.findAll()
    return user
}

const getOneUserService = (email) => {
    const user = User.findOne({email: email})
    return user
}


module.exports = {
    createUserService,
    getUsersService,
    getOneUserService
}