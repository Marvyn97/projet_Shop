import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import {v4 as uuidv4} from 'uuid';
import jwt from 'jsonwebtoken';
import "dotenv/config";

const createToken = (id) => {
     return jwt.sign({id}, process.env.TOKEN_SECRET, {
         expiresIn: 3 * 24 * 60 * 1000,
     })
 };

export const signUp = async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10);
    const uuidV4 = uuidv4();
    
    const datas = {
        uid: uuidV4,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hash,
        phone: req.body.phone,
        adress: req.body.adress,
        postal_code: req.body.postal_code,
        city: req.body.city,
        country: req.body.country,
        role: "user",
        validate: "no",
    }
    const query = `INSERT INTO user (uid, first_name, last_name, email, password, role, validate) VALUES (? ,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

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

    const datas = {
        email: req.body.email,
        password: req.body.password,
    }
    const query = `SELECT * FROM user WHERE email = ?`;

    try {
        const user = await User.getUsers(query, datas.email);
        if(!user.length) {
            return res.json ({
                status: 401,
                msg: "l'email est incorrect",
            });
        } else {
            const pwValide = await bcrypt.compare(datas.password, user[0].password);
            if (pwValide) {
                const id = user[0].id;
                const token = createToken(id);
                console.log(token);
                return res.json({
                    status: 200,
                    user: user[0],
                });
            } else {
                return res.json({
                    status: 404,
                    msg: "le mot de passe est incorrect",
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
}

