const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

// create and config server
const server = express();
server.use(cors());
server.use(express.json({limit: "25mb"}));

async function getDBConnection () {
  const connection = await mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_admin_paula",
    password: "GAj5@ct&C3a%ay4",
    database: "freedb_netflix-pair-programming-team-1",
  });
  connection.connect();
  return connection;
}

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get("/movies", async (req, res) => {
  const connection = await getDBConnection();
  const sql = "SELECT * FROM movies";
  const [moviesResult] = await connection.query(sql); // devuelve un array con dos elementos
  connection.end();
  res.status(200).json({
    status: "success",
    message: moviesResult,
  });
});



