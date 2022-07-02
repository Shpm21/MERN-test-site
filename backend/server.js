// Allows to run server ('node backend/server' on terminal if there's no script, else 'npm start')
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

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

// error mw
app.use((err, req, res, next) => {
    // envia el mensaje antes del error
    // Si el error es 200, cambiar a 500, si no, mantener codigo de error
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    // creamos el objeto con el mensaje
    res.json({
        message: `No existe un producto con ese id. ${err.message}`,

        // si estamos en produccion, no va  a mostrar el stack del error
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
})

app.listen(PORT, console.log(`💁🏻‍♀️💅🏻 API is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
