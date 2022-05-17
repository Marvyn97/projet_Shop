import Admin from "../models/admin.model.js";

export const deleteProduct = async (req, res) => {
    id = req.params.id;
    const query = `DELETE FROM product WHERE id = ?`;

    try {
        await Admin.delete(query, id);
        res.json({
            status: 200,
            msg: "le produit à bien été supprimé "
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            msg: "problème de suppression du produit",
        })
    }
}

export const deleteOrder = async (req, res) => {
    id = req.params.id;
    const query = `Delete FROM order WHERE id = ?`;

    try {
        await Admin.delete(query, id);
        res.json({
            satus: 200,
            msg: "la commande à bien été supprimé",
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            msg: "problème de suppression de commande"
        })
    }
}

export const deleteUser = async (req, res) => {
    id = req.params.id;
    const query = `DELETE FROM user WHERE id = ?`;

    try {
        await Admin.delete(query, id);
        res.json({
            status: 200,
            msg: "l'utilisateur à bien été supprimé",
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            msg: "problème de supression de l'utilisateur",
        })
    }
}