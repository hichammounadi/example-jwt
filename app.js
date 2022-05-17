require('dotenv').config()
const sequelize = require('./db/db')
const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes')


const port = process.env.PORT || 3000

app.use(express.json())


app.use('/api/v1/user', userRouter)
// ? depends on your needs
sequelize.sync().then((result) =>{
    app.listen(port, () => {
        console.log(`live on : http://localhost:${port}`);
    })

}).catch((err) => {
    console.log(`An error occure : ${err}`)
})
