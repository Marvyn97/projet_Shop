import pool from "../config/database/db.js";

class User {

    static async save(query, datas){
        const [result] = await pool.execute(query, [...Object.values(datas)]);
        return result;
    }

    static async getUsers(query){
        const [result] = await pool.execute(query);
        return result;
    }

    static async getUsersbyValue(query, value){
        const [result] = await pool.execute(query, [value]);
        return result;
    }

    static async getUserById(query, id){
        const [result] = await pool.execute(query, [id]);
        return result;
    }
}

export default User;