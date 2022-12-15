import { createConnection } from "mysql";

function main() {
  console.log("MYSQL QUERY DEMO");

  let connectionUri = {
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "cdac",
  };

  let connection = createConnection(connectionUri);
  connection.connect();

  let sql = `SELECT * FROM message`;
  connection.query(sql, (error, results) => {
    console.log(results);
  });

  connection.end();
}

main();
