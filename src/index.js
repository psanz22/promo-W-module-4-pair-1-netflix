const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));
server.set('view engine', 'ejs');

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_admin_paula',
    password: 'GAj5@ct&C3a%ay4',
    database: 'freedb_netflix-pair-programming-team-1',
  });
  connection.connect();
  return connection;
}

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/', async (req, res) => {
  const connection = await getDBConnection();
  const sqlQuery = 'SELECT * FROM movies';
  const [result] = await connection.query(sqlQuery);
  console.log(result);
  res.render('landing', { moviesList: result });
});

server.get('/movie/:movieId', async (req, res) => {
  const connection = await getDBConnection();
  const foundMovie = 'SELECT * FROM movies WHERE id_movies=?';
  const [result] = await connection.query(foundMovie, [req.params.movieId]);
  console.log(result);
  connection.end();
  res.render('movie', { movies: result[0] });
});

server.get('/movies', async (req, res) => {
  console.log('serán estos los query params?:', req.query);
  const connection = await getDBConnection();
  const sql = 'SELECT * FROM movies';
  const [moviesResult] = await connection.query(sql); // devuelve un array con dos elementos
  connection.end();
  res.status(200).json({
    status: 'success',
    message: moviesResult,
  });
});

server.post('/signup', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const connection = await getDBConnection();
  const emailQuery = 'SELECT * FROM users WHERE email = ?';
  const [emailResult] = await connection.query(emailQuery, [email]);
  if (emailResult.length === 0) {
    const passwordHashed = await bcrypt.hash(password, 10);
    const newUserQuery = 'INSERT INTO users(email, password) VALUES (?, ?)';
    const [newUserResult] = await connection.query(newUserQuery, [
      email, passwordHashed
    ]);
    res.status(201).json({
      success: true,
      id: newUserResult.id
    });
  } else{
    res.status(400).json({
      success: false,
      message: 'Email already exists'
    });
  }
})
