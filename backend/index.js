const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Database connection with mongoDB
mongoose.connect('mongodb+srv://mahrukhdev:secret123@cluster0.i1eobyn.mongodb.net/glowcare');

//API Creation
app.get('/', (req, res) => {
    res.send('Express API is working');
});

//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });

// creating upload endpoint for images
app.use('/images', express.static('upload/images'));


// Schema for Creating Products
const productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    available: { type: Boolean, default: true },
});
const Product = mongoose.model('Product', productSchema);
app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        res.json({
            success: 1,
            image_url: `http://localhost:${port}/images/${req.file.filename}`
        });
    } else {
        res.status(500).json({ success: 0, message: 'File upload failed' });
    }
});

app.post('/addproducts', async (req, res) => {
    try {
        let products = await Product.find({});
        let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

        const product = new Product({
            id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
        });

        await product.save();
        res.json({ success: true, name: req.body.name });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ success: false, message: 'Failed to add product' });
    }
});


// creating API for deleting product
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Product Deleted");
    res.json({
        success: true,
        name: req.body.name
    });
});

// creating API for getting all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);
});


app.listen(port, (error) => {
    if (!error) {
        console.log('Server is running on port: ', port);
    }
    else {
        console.log('Error: ', error);
    }
});