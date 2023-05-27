import pool from "../config/database/db.js";

class OrderDetail {
    static async getOrderDetail (query){
        const [result] = await pool.execute(query);
        return [result];
    }

    static async getOrderdetailById (query, id){
        const [result] = await pool.execute (query, [id]);
        return result;
    }

    static async save(query, datas){
        const [result] = await pool.execute(queryf, [...Object.values(datas)]);
        return result;
    }
}

export default OrderDetail;