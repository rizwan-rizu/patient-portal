const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const app = express();
                // NOt a database, just some in-memory storage for now
const DUMMY_PRODUCTS = [
    {
        userid: '1234',
        name: 'rizwan',
        location: 'islamabad'
    },
    {
        userid: '6789',
        name: 'hadi',
        location :'islamabad'
    }
];

app.use(bodyParser.json());

// CORS Headers => Required for cross-origin/ cross-serber communication
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods', 
        'GET, POST, PATH, DELETE, OPTIONS'
    );
    next();
});

app.get('/products', (req, res, next) => {
    res.status(200).json({ products: DUMMY_PRODUCTS });
});

app.post('/product', (req, res, next) => {
    const { title, price } = req.body;

    if (!title || title.trim().length === 0 || !price || price <=0){
        return res.status(422).json({
            message: 'invalid input please enter valid title and price'
        });
    }
    
    const createdProduct = {
        id: uuid(), 
        title, 
        price
    };
    
    DUMMY_PRODUCTS.push(createdProduct);
    
    res
      .status(201)
      .json({ message: 'Create new product', product: createProduct});
});

app.listen(8000);  // start Node + Express server on port 5000
