const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://alvinmureithi1:hN80ROQ7V9zXfg51@cluster0.hmayedv.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Serving uploaded images
app.use('/images', express.static('upload/images'));

// Schema for Creating Products
const Product = mongoose.model("Product", new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
}));

// Endpoint for Image Upload
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `https://del-admin.onrender.com`
    });
});

// Endpoint for Adding a Product
app.post('/addproduct', async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        await product.save();
        console.log("Product saved");
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// Fetching New Collections
app.get('/newCollections', async (req, res) => {
    try {
        const products = await Product.find({}).sort({ date: -1 }).limit(8); // Fetch the latest 8 products
        console.log("New Collection Fetched");
        res.json(products); // Ensure that an array is returned
    } catch (error) {
        console.error('Error fetching new collections:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetching Popular in Women Category
app.get('/popularinwomen', async (req, res) => {
    try {
        const products = await Product.find({ category: "women" }).limit(4); // Fetch the top 4 products
        console.log("Popular in women fetched");
        res.json(products); // Ensure that an array is returned
    } catch (error) {
        console.error('Error fetching popular products in women category:', error);
        res.status(500).json({ error: 'Server error' });
    }
});


// Remaining API endpoints remain unchanged...

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server Running on Port ${port}`);
    } else {
        console.error("Error:", error);
    }
});
