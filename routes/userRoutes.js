const userRouter = require('express').Router()
const {
    createUserController,
    getAllUsersController,
    loginUserController
} = require('../controllers/userController')
const auth = require('../middlewares/authentication')




userRouter.post('/add',  createUserController)
userRouter.get('/users', auth,  getAllUsersController)
userRouter.post('/login', loginUserController)


module.exports = userRouter