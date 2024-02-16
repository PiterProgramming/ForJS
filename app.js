console.log("Actividad 1")

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
    console.log(i);
    }
}

// Actividad 2
console.log("Actividad 2")

let pokemons = [
    { nombre: 'Pikachu', numero: 5 },
    { nombre: 'Bulbasaur', numero: 10 },
    { nombre: 'Ivysaur', numero: 49 },
    { nombre: 'Charmaleon', numero: 12 },
    { nombre: 'Charizard', numero: 20 },
    { nombre: 'Squirtle', numero: 35 },
    { nombre: 'Warturtle', numero: 31 },
    { nombre: 'Metapod', numero: 15 },
    { nombre: 'Caterpie', numero: 11 },
    { nombre: 'Weedle', numero: 45 },
    { nombre: 'Kakuna', numero: 19 },
    { nombre: 'Charmander', numero: 29 },
];

// Función que muestra en consola los nombres de los Pokémon que son múltiplos de 5
function mostrarPokemonsMultiplosDeCinco(numeroMaximo) {
    console.log(`Pokémon que son múltiplos de 5 hasta el número ${numeroMaximo}:`);
    for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].numero <= numeroMaximo && pokemons[i].numero % 5 === 0) {
        console.log(pokemons[i].nombre);
    }
    }
}

  // Llamada a la función con un número introducido por el usuario
  // Reemplaza el 50 con el número que desees para la prueba
mostrarPokemonsMultiplosDeCinco(50);


// Actividad 3
console.log("Actividad 3")

const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

arreglo.forEach(elemento => {
if (typeof elemento === 'number') {
    console.log(elemento);
}
});

