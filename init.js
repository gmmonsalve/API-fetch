var content = document.getElementById("contenido");
var btn  = document.getElementById("boton");
var con = document.getElementById("icon");

btn.addEventListener('click',function(){
    fetch('https://randomuser.me/api')
    .then(data=> data.json())
    .then(data => {
        var datos = data.results['0'];
        con.innerHTML = `
        
        <img src="${datos.picture.large}" width="100px" class=" img-fluid rounded border"> 
        <p class = "font-weight-bold">${datos.name.first}  ${datos.name.last}</p>
        <p>  email:\n ${datos.email}</p>
        <p> phone: ${datos.phone}</p>
        `
        console.log(datos);
    })

});