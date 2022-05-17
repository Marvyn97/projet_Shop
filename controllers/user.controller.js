import User from "../models/user.model.js";

export const getusers = async (req, res) => {
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