import pool from "../config/database/db.js";

class Product {
    static async getDatas(query){
        const result = await pool.execute(query);
        return result;
    }
}

export default Product;