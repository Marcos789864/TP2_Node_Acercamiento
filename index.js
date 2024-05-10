import {alumno,Alumno}  from "./src/models/alumno.js";
import {sumar, multiplicar, dividir} from "./src/modules/matematica.js";
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from
"./src/modules/omdb-wrappers.js";
import axios from "axios";

import express, { response }  from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    
        res.status(200).send('Ya estoy respondiendo!');
})


  app.get('/saludar/:nombre', (req, res) => {
    res.status(200).send(`Hola ${req.params.nombre}`);
  })

  app.get('/validarfecha/:ano/:mes/:dia', (req, res) =>{
        let ano = req.params.ano;
        let mes = req.params.mes
        let dia = req.params.dia
        let fecha = `${ano}-${mes}-${dia}`;
        let fechaPar = null;
        fechaPar = Date.parse(fecha);
        console.log('fechaPar', fechaPar)
        if (isNaN(fechaPar) ==true)
        {
            res.status(400).send("Bad request");
        }
        else
        {
            res.status(200).send(`OK`);
        }     
        
        
  })


  app.get('/matematica/sumar/:n1/:n2', (req, res) =>
  {
    let numero1 = parseFloat(req.params.n1);
    let numero2 = parseFloat(req.params.n2);d
    let suma = numero1 + numero2;

    if(!parseFloat(numero1) || !parseFloat(numero2))
    {
      res.status(400).send("Bad request")
    }
    else
    {
      res.status(200).send(`Ok, el resultado de la suma es: ${suma}`);
    }
  })

  app.get('/matematica/restar/:n1/:n2', (req, res) =>
  {
    let numero1 = parseFloat(req.params.n1);
    let numero2 = parseFloat(req.params.n2);
    let restar = numero1 - numero2;

    if(!parseFloat(numero1) || !parseFloat(numero2))
    {
      res.status(400).send("Bad request");
    }
    else
    {
      res.status(200).send(`Ok, el resultado de la restar es: ${restar}`);
    }
  })

  app.get('/matematica/multiplicar/:n1/:n2', (req, res) =>
  {
    let numero1 = parseFloat(req.params.n1);
    let numero2 = parseFloat(req.params.n2);
    let multiplicar = (numero1 * numero2);

    if(!parseFloat(numero1) || !parseFloat(numero2))
    {
      res.status(400).send("Bad request");
    }
    else
    {
      res.status(200).send(`Ok, el resultado de la multiplicacion es: ${multiplicar}`);
    }
  })

  app.get('/matematica/dividir/:n1/:n2', (req, res) =>
  {
    let numero1 = parseFloat(req.params.n1);
    let numero2 = parseFloat(req.params.n2);
    let dividir = (numero1 / numero2);

    if(!parseFloat(numero1) || !parseFloat(numero2))
    {
      res.status(400).send("Bad request");
    }
    else
    {
      res.status(200).send(`Ok, el resultado de la division es: ${dividir}`);
    }
  })


  app.get('/omdb/searchpage/:texto/:p', async (req, res) =>
  {
    let txt = req.params.texto;
    let p = parseFloat(req.params.p);
    let response = "";
 
    try{
      response = await OMDBSearchByPage(txt,p);
      console.log(response.datos)
    } catch(err)
    {
      res.status(400).send("Bad request");
    }
    
    if(response.datos.Response == 'True')
    {
      res.status(200).send(response.datos);

    }
    else
    {
      res.status(400).send("Bad request");
    }

  })

  app.get('/omdb/searchcomplete/:texto', async (req, res) =>
  {

    let txt = req.params.texto;

    let response = ""

    console.log(txt);
    try{
      response = await OMDBSearchComplete(txt);
    } catch(err)
    {
      res.status(400).send("Bad request");
    }
    
    if(response.datos.Response == 'True')
    {
     res.status(200).send(response.datos);
    }
    else
    {
      res.status(400).send("Bad request");
    }
  })

  app.get("/omdb/getbyomdbid/:imdbID", async (req, res) =>
  {
    let id = req.params.imdbID;
    let response= "";

    try
    {
      response = await OMDBGetByImdbID(id);
      console.log(response);
    }
    catch(err)
    {
      res.status(400).send("Bad request");
    }
     


    if(response.datos.Response == 'True')
    {
      res.status(200).send(response.datos)
    }
    else
    {
      res.status(400).send("Bad request");
    }

  })



  app.get("/alumnos",  (req, res) =>
  {
    const alumnosArray = [];
    alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
    alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
    alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));
    
    res.status(200).send("OK");
  })


  app.get("/alumnos/:dni",  (req, res) =>
  {
    const alumnosArray = [];
    alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
    alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
    alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));

    let Dni = req.params.dni;
    const encontrado = alumnosArray.find((a) => a.dni == Dni);
    
    if(encontrado != null)
    {
      res.status(200).send(encontrado);
    }
    else
    {
      res.status(400).send("Bad request");
      console.log(encontrado);
    }

  })


  app.post("/alumnos",  (req, res) =>
  {
    const alumnosArray = [];
    alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
    alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
    alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));



  })




  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})