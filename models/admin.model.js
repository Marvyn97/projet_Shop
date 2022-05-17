import pool from "../config/database/db.js";

class Admin {

    static async delete(query, id) {
        const result = await pool.execute(query, [id]);
        return result;
    }
}

export default Admin;