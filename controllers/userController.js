const {
    createUserService,
    getUsersService,
    getOneUserService
} = require('../services/userService')



const createUserController = async(req, res) => {
    const user = await createUserService({...req.body})
    res.status(201).send({
        msg: `User with name ${user.name} added successfully`
    })
}


const getAllUsersController = async(req, res) => {
    const users = await getUsersService();
    res.status(200).send({
        users: users,
        count: users.length
    })
}


const loginUserController = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await getOneUserService(email)
        console.log(user);
        // not null
        // one of both is incorrec
        const isMatch = await user.comparePass(password)
        if(!isMatch) {
            return res.send(`password doesn't match` )
        }
        const token = user.createJWT();
        res.send({my_token: token})
    } catch (error) {
        res.send(`there was an error ${error}`)
    }
}



module.exports = {
    createUserController,
    getAllUsersController,
    loginUserController
}