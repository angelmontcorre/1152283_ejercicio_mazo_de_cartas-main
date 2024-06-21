fetch("js/data.json")
    .then(response => response.json())
    .then(data => procesar(data));

let cartas = []; 


let procesar = (json) => {
    const data = json.data; 

    
    cartas = [...cartas, ...data];

    mostrarCartasEnTabla();

    const row = document.querySelector('.seccion_cartas'); // Encuentra el contenedor donde quieres mostrar las cartas

    data.forEach((carta, index) => { // Itera sobre cada carta en el arreglo
        const card = document.createElement('img'); // Crea un elemento <img> para la carta
        card.src = `img/${carta.numero}.png`; // Asigna la imagen correspondiente a la carta
        card.addEventListener('click', () => incrementarValor(carta)); // Añade un event listener para el clic
        row.appendChild(card); // Agrega la carta al contenedor
    });
};

setTimeout(() => {
    console.log(cartas);
}, 1000);

function incrementarValor(carta) {
    const cartaEnArray = cartas.find(c => c.numero === carta.numero);
    cartaEnArray.valor++; 
    console.log(`Carta clickeada tiene un valor de : ${cartaEnArray.valor}`); 
    actualizarTabla();
}

function mostrarCartasEnTabla() {
    const tablaBody = document.getElementById('tablaCartas');
    const cartasOrdenadas = cartas.sort((a, b) => b.valor - a.valor); // ordenado cartas por valor de mayor a menor
    tablaBody.innerHTML = ''; // Limpiar tabla
    cartasOrdenadas.forEach((carta, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>Carta ${carta.numero}</td>
            <td>${carta.valor}</td>
        `;
        tablaBody.appendChild(fila);
    });
}

function actualizarTabla() {
    mostrarCartasEnTabla(); 
}

//datos procesados y cargados

function registrarCarta() {
    let numeroDeCarta = document.getElementById('numero').value;
    let carta = document.getElementById('numero').value; //aproposito, ya que solo voy a trabajar con el numero de las cartas
    let nuevaCarta = {
        numero: numeroDeCarta,
        carta: carta,
        valor: 0 
    };
    //verifica
    if (cartas.some(carta => carta.numero === nuevaCarta.numero || nuevaCarta.numero>13 || nuevaCarta.numero <= 0)) {
        alert("Error, carta ya añadida o número inexistente, prueba a registrar otra.");
        limpiarRegistro();
    } else {
        cartas.push(nuevaCarta);
        console.log(cartas);
        mostrarCartaEnInterfaz(nuevaCarta);
        mostrarCartasEnTabla();
        limpiarRegistro();
    }
}

function mostrarCartaEnInterfaz(carta) {
    const row = document.querySelector('.seccion_cartas'); 
    const card = document.createElement('img'); 
    card.src = `img/${carta.numero}.png`; 
    card.addEventListener('click', () => incrementarValor(carta));
    row.appendChild(card); 
}

function limpiarRegistro(){
let cleanNumero = document.querySelector('#numero')
cleanNumero.value = '';
}

