let divId = document.getElementById("contenedor");
let divId2 = document.getElementById("contenedor2");
let divId3 = document.getElementById("contenedor3");
let boton = document.getElementById("boton");

boton.addEventListener("click", texto);
boton.addEventListener("click", texto2);
boton.addEventListener("click", texto3);

function texto() {
  divId.innerHTML = "esto lo agrego el primer div";
  divId.style.margin = "50px";
  divId.style.background = "gray";
}

function texto2() {
  divId2.innerHTML = "esto lo agrego el segundo div";
  divId2.style.margin = "50px";
  divId2.style.background = "aliceblue";
}

function texto3() {
  divId3.innerHTML = "esto lo agrego el tercero div";
  divId3.style.margin = "50px";
  divId3.style.background = "green";
}

