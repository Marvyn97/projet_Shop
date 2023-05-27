import Product from "../models/product.model.js";
import bcrypt from 'bcrypt';

export const getProductAll = async(req, res) => {
    const query = `SELECT * FROM product`;

    try {
        await Product.getDatas(query);
        res.json({
            status: 200,
            msg: "affichage des produits reussi",
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            msg: "problème d'affichage des produits",
        });
    }
}

export const getOneProduct = async (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM product WHERE id = ?`;
    try {
        await Product.getOneProduct(query, id);
        res.json({
            status: 200,
            msg: "affichage de votre produit effectué",
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            msg: "problème d'affichage de votre produit",
        })
    }
}

export const addProduct = async (req, res) => {
    const datas = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        quantity_stock: req.body.quantity_stock,
    }
    const query = `INSERT INTO (title, description, image, price, quantity_stock) 
                    VALUES (?, ?, ?, ?, ?)`;
    try {
        await Product.save(query, datas);
        res.json({
            status: 200,
            msg:"le produit est bien ajouté"
        })
    } catch (error) {
        console.log(erro);
        res.json({
            status: 200,
            msg: "problème d'insertion du produit"
        });
    }
}

export const updateProduct = async (req, res) => {
    const datas = {};
    for (key in req.body) {
        datas[key] = req.body[key];
    }
    datas.id = req.parasm.id;
    datas.password = await bcrypt.hash(req.body.password, 10);

    const query = `UPDATE product SET title = ?, description = ?, image = ?, price = ?, quantity_stock = ? WHERE id = ?`;

    try {
        await Product.save(query, datas);
        res.json({
            status: 200,
            msg: "mise à jour du produit effectué",
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            msg: "problème de mise à jour du produit",
        })
    }
}


