/*producto*/
//crear objeto producto
export const productos = [
    {
        id: 1,
        nombre: "polera pique", 
        precio: 50, 
        imagen:"https://www.ferouch.cl/polera-pique-basica-ss-22-dk-capri/p?idsku=27864&gclid=EAIaIQobChMI0q_rtdCKgQMVj1xIAB2ajAGZEAQYAiABEgIaBPD_BwE", 
        categoria:"polera",
    },
    {
        id: 2,
        nombre: "poleron tomy",
        precio: 100,
        imagen:"https://www.ferouch.cl/polera-pique-basica-ss-22-dk-capri/p?idsku=27864&gclid=EAIaIQobChMI0q_rtdCKgQMVj1xIAB2ajAGZEAQYAiABEgIaBPD_BwE",
        categoria:"poleron",
    },
    {
        id: 3,
        nombre:"polera polo", 
        precio: 150, 
        imagen: "https://www.ferouch.cl/polera-pique-basica-ss-22-dk-capri/p?idsku=27864&gclid=EAIaIQobChMI0q_rtdCKgQMVj1xIAB2ajAGZEAQYAiABEgIaBPD_BwE", 
        categoria:"polera",
    },
];

//verifica si esta el producto            en caso que no             este lo ingresa
JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));