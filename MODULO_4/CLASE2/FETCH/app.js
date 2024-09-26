let contenido = document.getElementById("contenido");
let contenido1 = document.getElementById("contenido1");
let boton = document.getElementById("mostrar");
let boton1 = document.getElementById("mostrar1");

boton.addEventListener("click", mostrarApiData, true);
boton1.addEventListener("click", mostrarApiData1, true);

function mostrarApiData() {
  const url = "https://randomuser.me/api/";
  console.log("entro");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      contenido.innerHTML = `
                            <img src='${data.results[0].picture.large}'>
                            <p> Nombre: ${data.results[0].name.first}</p>
                            `;
    });
}

async function mostrarApiData1() {
  const url = "https://randomuser.me/api/";
  const res = await fetch(url);
  const data = await res.json();

  contenido1.innerHTML = `
                            <img src='${data.results[0].picture.large}'>
                            <p> Nombre: ${data.results[0].name.first}</p>
                            `;


  console.log(data, "data <---- async");

  console.log("entro a la funcnion async");
}
