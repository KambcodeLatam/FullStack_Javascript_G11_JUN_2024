fetch('https://dragonball-api.com/api/characters/1')
    .then(resp => resp.json())
    .then(resp => {
        const commicId = document.getElementById('Id');
        const ki =  document.getElementById('Ki');
        const name =  document.getElementById('name');
        const imagen =  document.getElementById('imagen');

        commicId.textContent = resp.id;
        ki.textContent = resp.ki
        name.textContent = resp.name;
        imagen.src = resp.image;
        imagen.width="150" ;
        imagen.height="200";
    })
    .catch(err => console.log(err));
