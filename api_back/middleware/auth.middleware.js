import Jwt from "jsonwebtoken";
import "dotenv/config";

export const chekUser = async (req, res, next) => {
    console.log("req.headers -->",req.headers);
    const token = req.headers["x-access-token"];
    console.log("token ->", token);
    if(token === undefined) {
        res.json({
            status: 401,
            msg: "token not found",
        })
    } else {
        Jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken)=>{
            console.log("decoded token ->>", decodedToken);
            if(err) {
                res.json({
                    status: 401,
                    msg: "token invalid"
                })
            } else {
                console.log("decoded.uid ->>", decoded.uid);
                req.params.uid = decoded.uid
                next();
            }
        })
    }
}

