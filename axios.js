


/* ASÍ ES CON PROMISE.. PERO SE PUEDE USAR ASYNC
axios.get (`https://api.themoviedb.org/3/movie/popular?api_key=0a8d3dcea2305a4f5aea2235b3f21d25&lenguaje=es-MX`)
.then((respuesta) =>{
    //console.log(respuesta.data.results) nos trae el array
    // acordarse respuesta.data.results[3].tittle nos trae el título del elemento 3
    //console.log(respuesta.data) nos trae incluso la cantidad. etc

})
.catch((error) =>{
    console.log(error)
})
*/
const obtenerPeliculas= async () =>{
    try{
   /* const respuesta = await axios.get (`https://api.themoviedb.org/3/movie/popular?api_key=0a8d3dcea2305a4f5aea2235b3f21d25&lenguaje=es-MX&page=1`);*/
    // axios acepta un segundo parámetro
    const respuesta = await axios.get (`https://api.themoviedb.org/3/movie/popular?`
    ,{ 
        // acordarse que cuando uso el segundo parámtro NO HAY QUE CERRAR paréntisis
        params:{
        api_key : `0a8d3dcea2305a4f5aea2235b3f21d25`,
        languege : `es-MX`
        }
        /*,
        headers:{
             'Authorization': 'Bearer <<access_token>>'
        }
        // axiospermite otro parámetro que sería según esta api beres entonces pongo , {}
        // guardé imágenes para que se vea..todo esto depende de la API */
    } )
 // con AXIOS SI LA API LO PERMITE.. REEMPLAZAR GET POR POST Y LISTO
    console.log("terminó promise await")
    if(respuesta.status === 200){
        console.log(respuesta)   
    }
    
    } catch(error ){ // acordarse que aquí el catch NO usa punto 
        console.log(error)
    }
}
obtenerPeliculas();
