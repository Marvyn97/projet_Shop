import Product from "../models/product.model.js";

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
