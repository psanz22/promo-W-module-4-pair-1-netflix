// login

const getMoviesFromApi = (params) => {
  console.log('Se están pidiendo las películas de la app');
  console.log(params);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC

  const queryParams = `?genre=${params.genre}&sort=${params.sort}`;
  return fetch('http://localhost:4000/movies' + queryParams, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      console.log('data es:', data.message);
      return data.message;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
