const API = "https://rickandmortyapi.com/api/character";

// Consumir API
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      dibujarData(json.results), paginacion(json.info);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

// Dibujar cards de personajes
const dibujarData = (data) => {
    let html = "";
    
    data.forEach((pj) => {
        html += '<div class="col-md-4">';
        html += '<div class="card" style="width: 18rem;">';
        html += `<img src="${pj.image}" class="card-img-top" alt=".."/>`; 
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += `<p class="card-text">${pj.gender}</p>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });
    document.getElementById("datosPJ").innerHTML = html;
};


//Paginacion
const paginacion = (data) => {
  let html = "";
  html += `c
  document.getElementById("paginacion").innerHTML = html;
};

// Ejecutar getData
getData(API);

