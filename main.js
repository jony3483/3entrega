let div = document.getElementById("titulo"
);
console.log(div.innerHTML);
console.log(div.innerText);

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = e.target.children;

    if(!inputs[0].value.includes("@")){
        inputs[0].value = "";
        alert("debe ser un correo ")
    }
});



class Producto {
    constructor(nombre, disponible, talla, precio){
        this.nombre = nombre;
        this.disponible = disponible;
        this.talla = talla;
        this.precio = precio;
        this.vendido = false;
    }
    vender() {
        this.vendido = true;
    }
}

let productos =[
    { id: 1, nombre: "tomy", disponible: "XL, L", talla: "XL", precio: 3000},
    { id: 2, nombre: "tomy", disponible: "XL, L", talla: "L", precio: 5000},
    { id: 3, nombre: "polo", disponible: "XL", talla: "XL", precio: 7000},
    { id: 4, nombre: "levis", disponible: "XL", talla: "XL", precio: 4000},
    { id: 5, nombre: "levis", disponible: "M", talla: "M", precio: 8000},
];

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));

let nombre = prompt("ingres marca camisa");

const producto = productos.find((item) => item.nombre === nombre);

if (producto) {
    let mensaje = `
    id: ${producto.id}
    nombre: ${producto.nombre}
    disponible: ${producto.disponible}
    talla: ${producto.talla}
    $${producto.precio}
    `;

    alert(mensaje);
} else {
    alert("camisa no disponible");
}

let precio = parseInt(prompt("camisas menores a 5000 pesos"));
let filtrados = productos.filter ((item) => item.precio <= 5000);
filtrados.forEach((producto) => {
        if (filtrados){
            let mensaje = `
                id: ${producto.id}
                nombre: ${producto.nombre}
                disponible: ${producto.disponible}
                talla: ${producto.talla}
                $${producto.precio}
            `;

            alert(mensaje)
        } else{
            alert("no hay mas productos");
        }   
});

