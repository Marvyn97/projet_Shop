import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const signUp = async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10);
    const datas = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hash,
        role: "user",
        validate: "no",
    }
    const query = `INSERT INTO user (first_name, last_name, email, password, role, validate) VALUES (?, ?, ?, ?, ?, ?)`;

    try {
        await User.save(query, datas);
        res.json({
            status: 200,
            msg: " enregistrement effectué, un mail de validation vous sera envoyé"
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            msg: "problème d'enregistrement de l'utilisateur",
        })
    }
}

export const signIn = async (req, res) => {
    
}