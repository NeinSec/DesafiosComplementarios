class Producto {
    constructor(tipo, id, nombre, precio, stock) {
       
        this.tipo = tipo
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto ("Cotillon", 1, "Tarjeta invitación Spiderman", 1590, 50)
const producto2 = new Producto ("Cotillon", 2, "Piñata Spiderman", 6060, 50)
const producto3 = new Producto ("Cotillon", 3, "Servilleta Spiderman", 1550, 50)
const producto4 = new Producto ("Cotillon", 4, "Bolsas de dulces Spiderman", 1290, 50)
const producto5 = new Producto ("Cotillon",  5, "Globos Spiderman", 2160, 50)
const producto6 = new Producto ("Cotillon", 6, "Guirnalda Feliz Cumpleaños Spiderman"
    , 2160, 50)
const producto7 = new Producto ("img/vasos-spiderman.webp", "Cotillon", 7, "Vasos Spiderman", 1640, 50)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]

const divProductos = document.getElementById ("divContenedor")

    productos.forEach(producto => {
        divContenedor.innerHTML += `        
              <div class="card shadow m-1 my-3 bg-white rounded" style="width: 20rem;">
                <h5 class="card-title py-2 text-center text-secondary">${producto.nombre}</h5>
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
