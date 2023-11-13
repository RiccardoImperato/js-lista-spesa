'use strict'

// Lista della spesa
const spesa = ['Pasta', 'Olio', 'Pane', 'Caffè', 'Acqua', 'Sale'];
console.log(spesa);

// Variabili
let lista = document.querySelector('.list');
let i = 0;

// Ciclo while
while (i < spesa.length) {
    let prodotto = document.createElement('li');
    lista.append(prodotto);
    prodotto.append(spesa[i]);
    console.log(spesa[i]);
    i++;
}

