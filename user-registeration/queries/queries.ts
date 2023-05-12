export const Queries={
    CREATE_USER:"INSERT INTO users (username, password, email, fullname, mobile_number, user_type_code, created_on, created_by, updated_on, updated_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING user_id",
    GET_USER_BY_EMAIL:""
}