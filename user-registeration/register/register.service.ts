import { User } from "../models/user";
import { Pool, QueryResult } from 'pg';
import { DBService } from "../../db/db.service";
import {Queries } from "../queries/queries"; "../queries/queries";

export class RegisterService {
    private DBService: DBService;

    constructor() {
        this.DBService = new DBService();
    }

    public async createUser(user: User): Promise<number> {
        const query = Queries.CREATE_USER;
        const values = [
            user.username,
            user.password,
            user.email,
            user.fullName,
            user.mobileNumber,
            user.userTypeCode,
            user.createdAt,
            user.createdBy,
            user.updatedAt,
            user.updatedBy,
        ];

        let userId: number;
        try {
            const { rows } = await this.DBService.query(query, values);
            userId = rows[0].user_id;
            console.log(`User ${user.username} created successfully`);
        } catch (err) {
            console.log(`Error creating user: ${err}`);
            throw err;
        }
        return userId;
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        const query = {
            text: `SELECT id FROM users WHERE email=$1 LIMIT 1`,
            values: [email],
        };
        try {
            const { rows } = await this.DBService.query(query.text, query.values);
            return rows.length ? rows[0] : null;
        } catch (error) {
            throw error;
        }
    }
}

export default RegisterService;
