SELECT * FROM movies; 
SELECT title, genre FROM movies WHERE year > 1990;
SELECT * FROM movies WHERE category = 'Top 10';
UPDATE movies SET year = 1997 WHERE idMovies=2;

-- actores
SELECT * FROM actors;
SELECT * FROM actors WHERE birthday BETWEEN 1980 AND 1990;
SELECT name, lastname FROM actors WHERE country = 'Estados Unidos';

-- usuarios
SELECT * FROM users;
SELECT * FROM users WHERE plan_details = 'Standard';
DELETE FROM users WHERE name LIKE 'N%';

-- BONUS
ALTER TABLE actors ADD imageActors VARCHAR(200);

SELECT * FROM actors;
UPDATE actors 
SET imageActors = 'https://static.wikia.nocookie.net/doblaje/images/0/08/Emma_Watson.jpg/revision/latest?cb=20230621022426&path-prefix=es'
WHERE idActors = 1;

UPDATE actors 
SET imageActors = 'https://content20.lecturas.com/medio/2020/09/30/uma-thurman_c9f7d7d2_800x490.jpg'
WHERE idActors = 2;

UPDATE actors 
SET imageActors = 'https://phantom-telva.unidadeditorial.es/977c6d7b9cfbe76f65f80e319dad0c34/resize/828/f/jpg/assets/multimedia/imagenes/2023/04/04/16805975748538.jpg'
WHERE idActors = 3;

-- DROP TABLE actors;
-- DROP DATABASE netflix;
