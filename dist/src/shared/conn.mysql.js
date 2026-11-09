import mysql from 'mysql2/promise';
const db = mysql.createPool({
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME ?? 'bdd_viajes',
    waitForConnections: true,
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT ?? 10),
    queueLimit: 0
});
export async function testDatabaseConnection() {
    try {
        const connection = await db.getConnection();
        try {
            await connection.query('SELECT 1');
        }
        finally {
            connection.release();
        }
        console.log('Database connection established');
    }
    catch (error) {
        console.error('Unable to connect to the database', error);
        throw error;
    }
}
export async function closeDatabaseConnection() {
    try {
        await db.end();
        console.log('Database connection pool closed');
    }
    catch (error) {
        console.error('Unable to close the database connection pool', error);
        throw error;
    }
}
export default db;
//# sourceMappingURL=conn.mysql.js.map