const listaProductos = document.getElementById("ecommerce");

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
 
fetch("../dataproductos3.json")
.then((res) => res.json())
.then((data) => {
    data.forEach((producto) => {
        const section = document.createElement("section");
        section.innerHTML = `
    <div class="col">
      <div class="card" style="width: 20rem;">
      <img src="${producto.img}" class="card-img-top imgProd" style="height: 16rem;" alt="...">
        <div class="card-body text-center">
          <h3 class="card-title titleProd" id="">${producto.title}</h3>
          <h4 class="card-text descriptionProd" id="">${producto.description}</h4>
          <h4>$ <span class="card-text priceProd" id="" >${producto.price}</span> </h4>
          <button data-id="${producto.id}" class="btn btn-primary agregar-carrito">Agregar</button>
        </div>
        </div>
        </div>`;
        
        listaProductos.append(section);
    });
});




listaProductos && listaProductos.addEventListener("click", agregarAlCarrito);



function agregarAlCarrito(e) {
    e.preventDefault();
    
    
    if (e.target.classList.contains("agregar-carrito")) {
        
        const productoSeleccionado = e.target.parentNode;
        console.log(productoSeleccionado);
        obtenerDatos(productoSeleccionado);
    }
    
}
function obtenerDatos(productoCard) {
    const datosProducto = {
        nombre: productoCard.querySelector(".titleProd").textContent,
        modelo: productoCard.querySelector(".descriptionProd").textContent,
        precio: productoCard.querySelector(".priceProd").textContent,
        
        img: productoCard.parentNode.querySelector(".imgProd").src
    };
    
    console.log(datosProducto);
    carrito.push(datosProducto);
    console.log(carrito);
    guardarStorage();
}

function guardarStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const contenedorCarrito = document.querySelector("#carrito")
const mostrarCarrito = document.querySelector("#mostrar-carrito")


if (mostrarCarrito) {
    mostrarCarrito.addEventListener('click', mostrarElCarrito)
    
}
function mostrarElCarrito() {
    if (localStorage.length == 0) {
        const msgInicial = document.createElement("h2")
        msgInicial.innerHTML = "No hay productos en el carrito"
        contenedorCarrito.appendChild(msgInicial);
    } else {
        renderizarCarrito()
    }
}

function renderizarCarrito() {
    limpiarCarrito()
    carrito.forEach(producto => {
        const row = document.createElement('tr');
        row.classList.add("col")
        
        row.innerHTML += `
        <td><img src="${producto.img}" style = "width: 10rem;"></img></td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        `
        contenedorCarrito.appendChild(row)

        const total = carrito.reduce((acc, elemento)=> acc + (parseInt(elemento.precio)), 0)
        let verTotal = document.getElementById("total");
        let priceDiscount = total - 500;
        total <= 3000?  verTotal.innerHTML = "Precio Total $" + total : verTotal.innerHTML = "Precio Total: $" +"<s>"+ total +"</s> $" + priceDiscount + " Obtienes un descuento";
    })
}


function limpiarCarrito() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
const volver = document.getElementById('volver-inicio-3')
volver.addEventListener ('click', (vaciarCarro))
const vaciar = document.getElementById('vaciar-3')
vaciar.addEventListener ('click', (vaciarCarro))
 function vaciarCarro () {
    localStorage.clear();
    limpiarCarrito();    
}




const inpNombre = document.querySelector("#nombre-compra-3");
const inpEmail = document.querySelector("#mail-compra-3");
const inpTelefono = document.querySelector("#telefono-compra-3");
const inpDNI = document.querySelector("#dni-compra-3");
const inpPago = document.querySelector("#pago-compra-3"); 
const inpEntrega = document.querySelector("#entrega-compra-3"); 
const btnEnviar = document.querySelector("#pagar-compra-3");
btnEnviar.addEventListener("click", formEnviar);

function formEnviar(e) {
    e.preventDefault();
    console.log(inpNombre.value);
    console.log(inpEmail.value);
    console.log(inpTelefono.value);
    console.log(inpDNI.value);
    console.log(inpPago.value);
    console.log(inpEntrega.value);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su pago fue realizado',
        showConfirmButton: false,
        timer: 1500
    })
}