import mysql from 'mysql2/promise';
declare const db: mysql.Pool;
export declare function testDatabaseConnection(): Promise<void>;
export declare function closeDatabaseConnection(): Promise<void>;
export default db;
//# sourceMappingURL=conn.mysql.d.ts.map