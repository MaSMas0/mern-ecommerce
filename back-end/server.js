import express from 'express'
import products from './data/products.js'
import cors from 'cors'
import { config } from 'dotenv'

config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())

app.get('/', (req,res)=>{
    res.send('Hello from server side')
})


app.get('/api/products', (req,res)=>{
    res.json(products)
})


app.get('/api/products/:id', (req,res)=>{
    const product = products.find((p)=>p._id === req.params.id)
    res.json(product)
})



app.listen(port,
    console.log(`Server is up and running in ${process.env.NODE_ENV} on http://localhost:${port}`)
)

