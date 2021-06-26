async function addCliente(url, data) {
    const response = await fetch(url, {
        method: 'post',
        credentials: "same-origin",
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (response.status==201){
        return response.json();
    }
    else{
        return null
    }
    
}

function submmit(event) {
    event.preventDefault();
    let tipo = document.getElementById('tipo');
    let documento = document.getElementById('documento');
    let nombre = document.getElementById('nombre');
    let direccion = document.getElementById('direccion');
    let telefono = document.getElementById('telefono');
    let email = document.getElementById('correo');
    let nombreContacto = document.getElementById('contacto');

    let data = {
        tipo: tipo.value.toString(),
        numero_documento: documento.value.toString(),
        nombre: nombre.value.toString(),
        direccion: direccion.value.toString(),
        telefono: telefono.value.toString(),
        email: email.value.toString(),
        nombre_contaco: nombreContacto.value.toString()
    }
    
    addCliente('http://127.0.0.1:8000/clientes/', data)
    .then(data=>{
        if(data){
            alert("usuario creado");
        }
        else{
            alert("usuario no creado");
        }

    });
   

}

async function selectData() {
     const clientsList = document.getElementById("clienteList")
     const response = await fetch("http://127.0.0.1:8000/clientes/")
     let htmlReturn = "";
     if (response.status==200){
        return response.json()
        .then(data=>{
            console.log(data);
            data.forEach(element => {
                htmlReturn=htmlReturn+ `<li class="list-group-item">${element.nombre}</li>`
            });
            clientsList.innerHTML =htmlReturn;
        });
    }
    else{
        return null
    }

}

async function deleteClient(){
    const idClient = document.getElementById("cliente-id");
    const response = await fetch(`http://127.0.0.1:8000/clientes/${idClient.value}/`, {
        method: 'delete',
        credentials: "same-origin",
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
    });
    if (response.status == 204){
        alert("CLiente eliminado")
    }
    else{
        alert("el CLiente no se pudo eliminar")
    }
    
}

async function generateUpdate(){
    const idClient = document.getElementById("cliente-id");
    let tipo = document.getElementById('tipo');
    let documento = document.getElementById('documento');
    let nombre = document.getElementById('nombre');
    let direccion = document.getElementById('direccion');
    let telefono = document.getElementById('telefono');
    let email = document.getElementById('correo');
    let nombreContacto = document.getElementById('contacto');

    let data = {
        tipo: tipo.value.toString(),
        numero_documento: documento.value.toString(),
        nombre: nombre.value.toString(),
        direccion: direccion.value.toString(),
        telefono: telefono.value.toString(),
        email: email.value.toString(),
        nombre_contaco: nombreContacto.value.toString()
    }
    const response = await fetch(`http://127.0.0.1:8000/clientes/${idClient.value}/`, {
        method:'put',
        credentials:"same-origin",
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if(response.status){
        alert("usuario actualizado")
    }
    else{
        alert("no se pudo actualizar el usuario")
    }
}

async function updateClient(){
    const idClient = document.getElementById("cliente-id");
    const form = document.getElementById("col-form");
    const response = await fetch(`http://127.0.0.1:8000/clientes/${idClient.value}/`, {
        method: 'get',
        credentials: "same-origin",
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
    });
    if (response.status == 200){
        response.json().then(data=>{
            document.getElementById('tipo').value = data.tipo;
            document.getElementById('documento').value = data.numero_documento;
            document.getElementById('nombre').value = data.nombre;
            document.getElementById('direccion').value= data.direccion;
            document.getElementById('telefono').value = data.telefono;
            document.getElementById('correo').value = data.email;
            document.getElementById('contacto').value = data.nombre_contaco;
        });
        form.innerHTML = form.innerHTML + `<button type="action" class="btn btn-success mt-1 "id ="actualizar-cliente">Actualizar</button>`
        document.getElementById("actualizar-cliente").addEventListener('click',generateUpdate)
    }
    else{

    }
   
}

selectData();

const form = document.getElementById('form');
const eliminar = document.getElementById('eliminar');
const actualizar = document.getElementById('actualizar');
eliminar.addEventListener('click',deleteClient)
actualizar.addEventListener('click',updateClient)
form.addEventListener('submit', submmit);

window.submmit = submmit;