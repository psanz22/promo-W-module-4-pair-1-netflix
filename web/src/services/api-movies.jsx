// login

const getMoviesFromApi = () => {
  console.log('Se están pidiendo las películas de la app');
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch('//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json')
  .then(response => response.json())
  .then(data => {
     return data;
  });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi
};

export default objToExport;
