import pool from "../config/database/db.js";

class User {

    static async save(query, datas){
        const result = await pool.execute(query, [...Object.values(datas)]);
        return result;
    }

    static async getUsers(query, value){
        const result = await pool.execute(query, [value]);
        return result;
    }
}

export default User;