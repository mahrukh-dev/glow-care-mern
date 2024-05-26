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

//creating middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({errors: "Please authenticate using a valid token"})    
    }
    else {
        try {
          const data = jwt.verify(token, 'secret_glowcare');
          req.user = data.user;
          next();
        } 
        catch (error) {
            res.status(401).send({errors: "Please authenticate using a valid token"})
        }
    }
}

//creating endpoint for adding products to cart
app.post('/addtocart', fetchUser, async (req, res) => {
    let userData = await Users.findOne({_id: req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.updateOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});
    res.send("Added")
});

//creating endpoiny to remove product from cart
app.post('/removefromcart', fetchUser, async (req, res) => {
    console.log("removed", req.body.itemId);
    let userData = await Users.findOne
    ({
        _id: req.user.id
    }); 
    if(userData.cartData[req.body.itemId] > 0){
        userData.cartData[req.body.itemId] -= 1;
    }
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Removed");
});

//creating endpoint to get cart data
app.post('/getcart', fetchUser, async (req, res) => {
    console.log("get cart");
    let userData = await Users.findOne({ 
        _id: req.user.id
    });
    res.json(userData.cartData);
});

//USER SCHEMA
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true},
    password: { type: String, required: true },
    cartData : { type: Object, default: {} },
    date: { type: Date, default: Date.now }
});
const Users = mongoose.model('Users', userSchema);

//API for user registration
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json(
            { 
                success: false, 
                message: 'User already exists with the same email' 
            }
        );
    }
    let cart = {};
    for (let i=0; i<300; i++){
        cart[i] = 0;   
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();

    //jwt authentication
    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_glowcare');
    res.json({ success: true, token});

});

//User login endpoint
app.post('/login', async (req, res) => {
    let user = await Users.findOne({
        email: req.body.email
    });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_glowcare');
            res.json({ success: true, token });
        }
        else {
            res.json({ success: false, errors: 'Invalid Password' });
        }
    }
    else{
        res.json({ success: false, errors: 'User not found' });
    }
});

// creating endpoint for new collections
app.get('/newcollection', async (req, res) => {
    let products = await Product.find({});
    let newCollection = products.slice(-5);
    console.log("new collection fetched");
    res.send(newCollection);
});

// creating endpoint for popular
app.get('/popular', async (req, res) => {
    let products = await Product.find({});
    let popular = products.slice(-5);
    console.log("popular fetched");
    res.send(popular);
});

app.listen(port, (error) => {
    if (!error) {
        console.log('Server is running on port: ', port);
    }
    else {
        console.log('Error: ', error);
    }
});