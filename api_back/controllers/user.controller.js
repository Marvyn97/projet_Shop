import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const getUsers = async (req, res) => {
    const query = `SELECT * FROM user`;

    try {
        await User.getUsers(query);
        res.json({
            status: 200,
            msg: "utilisateur",
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            msg: "error",
        })
    }
}

export const getUserById = async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM user WHERE id = ?`;

    try {
        await User.getUserById(query, id);
        res.json({
            status: 200,
            msg: "user id ok"
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (req, res) => {
    const datas = {};
    for (const key in req.body) {
        datas[key] = req.body[key];
    }
    datas.id = req.params.id;
    datas.password = await bcrypt.hash(req.body.password, 10);
    
    const query = `UPDATE user SET first_name = ?, last_name = ?, email = ?, password = ?, phone = ?, adress = ?, postal_code = ?, city = ?, country = ?, role = 'user', validate = 'yes' WHERE id = ?`;

    try {
        await User.save(query, datas);
        res.json({
            status: 200,
            msg: "mise à jour effectué",
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            msg: "problème de mise à jour du profil",
        })
    }
}

