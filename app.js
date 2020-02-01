const BASE_API_URL = 'https://rickandmortyapi.com/api/'
const PERSONAJES_URL = BASE_API_URL + 'characters'
const contenedor = document.querySelector('.container')
const mensaje = document.querySelector('.mensaje')

jQuery.ajax(BASE_API_URL, {
  success: function (response) {

    jQuery.ajax(response.characters, {
      success: function (response) {
        console.log('Lista de personajes', response)

        response.results.forEach(function (personaje) {
          contenedor.innerHTML = contenedor.innerHTML + `
             <div class="personaje">
             <img src="${personaje.image}" alt="" />
             <h4>${personaje.name}</h4>
             <br>
             <h4>${personaje.species}</h4>
             <br>
             <h4>Estado: ${personaje.status}</h4>
             <br>
             <h4>Género: ${personaje.gender}</h4>
             <br>
             <h4>Origen: ${personaje.location.name}</h4>
             </div>`
        })
         mensaje.innerHTML = mensaje.innerHTML + `<span>La cantidad es: ${response.info.count}</span>` 
      }
    })

  }
})


document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const textoBuscar = document.querySelector('.textoBuscar').value
  console.log(textoBuscar)

  jQuery.ajax(BASE_API_URL, {
    success: function (response) {

      jQuery.ajax(response.characters, {
        success: function (response) {
          console.log('Lista de personajes', response)
          contenedor.innerHTML = ''
          response.results.forEach(function (personaje) {

            if (personaje.name.toLowerCase().includes(textoBuscar)) {

              contenedor.innerHTML = contenedor.innerHTML + `
              <div class="personaje">
              <img src="${personaje.image}" alt="" />
              <p>${personaje.name}</p>
              <br>
              <p>${personaje.species}</p>
              <br>
              <p>Estado: ${personaje.status}</p>
              <br>
              <p>Género: ${personaje.gender}</p>
              <br>
              <p>Origen: ${personaje.location.name}</p>
              </div>`

            }
                   
          })
        }
      })
    }
  })

})


