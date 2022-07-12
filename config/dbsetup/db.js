const { createPool } = require("mysql2");
const pool = createPool({
    host: "localhost",
    user: "---",
    password: "---",
    port: 3306,
    database: "---",
});

pool.getConnection((err) => {
    if (err) {
        console.log("error connecting to db");
    }
    console.log("Connected to db");   
});

const executeQuery = (query, arrParams) => {
    return new Promise((resolve, reject) => {
        try{
            pool.query(query, arrParams, (err, data) => {
                if (err) {
                    console.log("error in executing the query");
                    reject(err);
                }
                resolve(data);
            });
        } catch(err) {
            reject(err);
        }
    });
};

module.exports = { executeQuery };