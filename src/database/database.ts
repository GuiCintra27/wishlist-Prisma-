import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host:"localhost",
    user: "postgres",
    password: "root",
    port: 5432,
    database: "wishlist"
})

export default connection;