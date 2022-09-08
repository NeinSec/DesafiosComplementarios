class Producto {
    constructor(img, nombre, precio, descripcion, stock) {
        this.img = img
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
        this.stock = stock
    }
}

const producto1 = new Producto ("assets/img/bacon-cheese.webp","BOX Bacon Cheese", 11990, "Box con pan de papa, hamburguesas 100% vacuno, extra queso cheddar y tocino crocante.", 50)

const producto2 = new Producto ("assets/img/cuarto-de-libra.webp","BOX Cuarto de Libra", 18990, "Box con pan de papa, hamburguesas 100% vacuno, queso cheddar, cebolla picada cruda, pepinillos en rodajas, ketchup y mostaza heinz.", 50)

const producto3 = new Producto ("assets/img/big-mac.webp","BOX BigMac", 18990, "Box con pan de papa, hamburguesas 100% vacuno, queso cheddar, cebolla picada cruda, pepinillos en rodajas, lechuga y salsa estilo big mac.", 50)

const producto4 = new Producto ("assets/img/onion-bacon.webp","BOX Onion Bacon", 21990, "Box con pan de papa, hamburguesas 100% vacuno, queso cheddar, tocino crocante, cebolla grillada, pepinillos en rodajas y salsa spread.", 50)

const producto5 = new Producto ("assets/img/jalapeno.webp","BOX Jalapeño", 20990, "Box con pan de papa, hamburguesas 100% vacuno, queso cheddar, jalapeños, pepinos dulces by maria, cebolla crispy y salsa spread.", 50)

const producto6 = new Producto ("assets/img/classic.webp","BOX Classic", 18990, "Box con pan de papa, hamburguesas 100% vacuno, queso cheddar, lechuga, tomate, cebolla cruda picada y salsa spread.", 50)

const producto7 = new Producto ("assets/img/crispy-bbq.webp","BOX Crispy bbq", 19990, "Box con pan de papa, hamburguesas 100% vacuno, queso cheddar, pepinillos en rodajas, cebolla crispy y salsa bbq.", 50)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]

const divProductos = document.getElementById ("divProductos")
const botonAlerta = document.getElementById("botonAlerta")
const botonesProductos = document.getElementsByClassName("botonesProductos")


productos.forEach(producto => {
    divProductos.innerHTML += `        
          <div class="card shadow m-1 my-3 bg-white rounded" style="width: 20rem;">
            <h5 class="card-title py-2 text-center text-secondary">${producto.nombre}</h5>
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text text-black-50 description">${producto.descripcion}</p>
              <h5 class="text-primary">Precio: <span class="precio">${producto.precio}</span></h5>
              <div class="d-grid gap-2">
              <button  class="btn btn-secondary botonesProductos">Añadir a Carrito</button>
            </div>
          </div>        
    </div>
    `
});

function mostrarCarrito() {
  Swal.fire({
    title: 'Carrito',
    showDenyButton: true,
    showCancelButton: true,
    html:
      '<p>Productos de Carrito</p>',
    confirmButtonText: 'Finalizar Compra',
    denyButtonText: `Cancelar Compra`,
    cancelButtonText: 'Seguir comprando'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {   
      Swal.fire('Compra Finalizada', 'En breve se enviaran los productos', 'success')
    } else if (result.isDenied) {
      Swal.fire('¿Desea Cancelar su compra?', '', 'info')
    }
  })
}

for(let i = 0; i < botonesProductos.length; i++) {
  botonesProductos[i].addEventListener('click', () => {
    Toastify({
      text: "Producto agregado al carrito",
      duration: 3000,
      //destination: "https://github.com/apvarun/toastify-js",
      //newWindow: false,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
        fontFamily: "Arial, Helvetica, sans-serif"
      },
      onClick: function(){
          mostrarCarrito()
      } // Callback after click
    }).showToast();
  })
}

botonAlerta.addEventListener('click', () => {
    mostrarCarrito()
})