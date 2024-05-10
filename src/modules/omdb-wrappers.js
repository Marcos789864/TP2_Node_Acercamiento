import axios from "axios";
const APIKEY = "188c11c7"; // Poné tu APIKEY, esta no funciona. Ya esta
const OMDBSearchByPage = async (searchText, page) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};
const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
console.log(requestString);
const apiResponse = await axios.get(requestString);
returnObject.respuesta = apiResponse.statusText;
returnObject.datos = apiResponse.data;
return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};
const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&t=${searchText}`;
console.log(requestString);
const apiResponse = await axios.get(requestString);
returnObject.respuesta = apiResponse.statusText;
returnObject.datos = apiResponse.data;
return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};
const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
console.log(requestString);
const apiResponse = await axios.get(requestString);
returnObject.respuesta = apiResponse.statusText;
returnObject.datos = apiResponse.data;
//anda esto1
return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};