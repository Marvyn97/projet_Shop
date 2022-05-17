import pool from "../config/database/db.js";

class Product {
    static async getDatas(query){
        const result = await pool.execute(query);
        return result;
    }

    static async getOneProduct(query, id) {
        const result = await pool.execute(query, [id]);
        return result;
    }
}

export default Product;