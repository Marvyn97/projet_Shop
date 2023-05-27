import pool from "../config/database/db.js";

class Order {

    static async getOrder(query) {
        const result = await pool.execute(query);
        return result;
    }

    static async updateOrderById (query , val){

    }

    static async getOrderByUser (query, id){
        const result = await pool.execute(query, [id]);
        return result;
    }

    static async deleteOrder (query, id){
        const result = await pool.execute(query, [id]);
        return result;
    }
}

export default Order;