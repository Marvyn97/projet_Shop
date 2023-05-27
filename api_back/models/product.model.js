import pool from "../config/database/db.js";

class Product {
    static async getDatas(query){
        const [result] = await pool.execute(query);
        return result;
    }

    static async getOneProduct(query, id) {
        const [result] = await pool.execute(query, [id]);
        return result;
    }

    static async save(query, datas){
        const [result] = await pool.execute(query, [...Object.values(datas)]);
        return result;
    }
}

export default Product;