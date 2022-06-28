const express = require ('express')
const products = require('./data/products')

const app = express()
const port = 3001

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
    console.log(`Server is up and running on http://localhost:${port}`)
)
