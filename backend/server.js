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


app.get('/', (req, res) => {
    res.send('Hay respuesta del servidor 💁🏻‍♀️💅🏻 <br> API is running...')
})

app.use('/api/products', productRoutes)

app.listen(PORT, console.log(`💁🏻‍♀️💅🏻 API is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
