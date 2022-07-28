let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		console.log(pagina)
		cargarPeliculas();
	}
});

const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=0a8d3dcea2305a4f5aea2235b3f21d25&lenguaje=es-MX&page=${pagina}`);
		//const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
	
		console.log(respuesta);
		
		
		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			console.log(datos.results)
			// en la api indica como viene la imagen 
			let peliculas = '';
			datos.results.forEach(pelicula => {
				console.log(pelicula.tittle)
			/*	peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;*/
				// comilla invertida alt 96
			  peliculas += `
			     <div class="pelicula">
				 <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
				 <h3 class="titulo">${pelicula.tittle}</h3>
				 </div>`
			});
			// para imágenes se saca de documentación API 

			document.getElementById('contenedor').innerHTML = peliculas;

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();