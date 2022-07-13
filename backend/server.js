// Allows to run server ('node backend/server' on terminal if there's no script, else 'npm start')
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './mw/errorMW.js'

// Al importar archivos, hay que ponerles el ".js", si no, no va a correr bien pq no podrá traer las cositas del back <3
//import products from './data/products.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 4000

// middleware gestiona API y acá nos muestra las rutas por consola. Se puede comentar.
//app.use((req, res, next) => {
//    console.log(req.originalUrl)
//    next()
//})

app.get('/', (req, res) => {
    res.send('Hay respuesta del servidor 💁🏻‍♀️💅🏻 <br> API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`💁🏻‍♀️💅🏻 API is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
