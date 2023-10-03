/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1");
let num1 = 30;
let num2 = 30;
if (num1 > num2) {
  console.log("Il numero maggiore e' ", num1);
} else if (num1 < num2) {
  console.log("Il numero maggiore e' ", num2);
} else {
  console.log("I due numeri sono uguali");
}

/* ESERCIZIO 2
Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2");
let x = Number(
  prompt("Inserisci il tuo numero per verificare se è magg. di 5:")
);
console.log(typeof x);
if (x !== 5) {
  console.log("Il tuo numero è diverso da 5");
} else {
  console.log("Il tuo numero è uguale a 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  */

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3");
let dividendo = Number(
  prompt("Inserisci il tuo numero per verificare se è divisibile per 5:")
);
if (dividendo % 5 > 0) {
  console.log("Il tuo numero non è divisibile per 5");
} else {
  console.log("Il tuo numero è divisibile per 5");
}
/* ESERCIZIO 4
Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4");
let primoNumero = Number(prompt("Inserisci il tuo primo numero:"));
let secondoNumero = Number(prompt("Inserisci il tuo secondo numero:"));
if (primoNumero === 8 || secondoNumero === 8) {
  if (primoNumero === 8 && secondoNumero !== 8) {
    console.log("Solo il primo numero è uguale a 8");
  } else if (primoNumero !== 8 && secondoNumero === 8) {
    console.log("Solo il secondo numero è uguale a 8");
  } else {
    console.log("Entrambi i numeri sono uguali a 8");
  }
} else {
  console.log("Nessuno dei due numeri è uguale a 8");
}
let somma = primoNumero + secondoNumero;
console.log(somma);
let differenza = primoNumero - secondoNumero;
console.log(differenza);
if (differenza >= 0) {
  differenza = primoNumero - secondoNumero;
  if (differenza === 8 || somma === 8) {
    if (differenza === 8 && somma !== 8) {
      console.log("Solo la differenza è uguale a 8");
    } else if (differenza !== 8 && somma === 8) {
      console.log("Solo la somma è uguale a 8");
    } else if (differenza === 8 || somma === 8) {
      console.log("Sia la somma che la differenza sono uguali");
    } else {
      console.log("Ne la somma ne la differenza sono uguali a 8");
    }
  }
} else {
  console.log(
    "La differenze tra i due numeri è negativa. Prova a invertirli la prossima volta!"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5");
let totalShoppingCart = 50;
let totaleCompresoSped;
if (totalShoppingCart >= 50) {
  totaleCompresoSped = totalShoppingCart;
  console.log("La spedizione è gratuita. Il totale è: ", totaleCompresoSped);
} else {
  totaleCompresoSped = totalShoppingCart + 10;
  console.log("La spedizione costa 10 euro. Il totale è: ", totaleCompresoSped);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6");
let valoreAcquisti = 100;
let CompresoSped;
valoreAcquisti = (valoreAcquisti / 100) * 80;
console.log(valoreAcquisti);
if (valoreAcquisti >= 50) {
  CompresoSped = valoreAcquisti;
  console.log("La spedizione è gratuita. Il totale è: ", CompresoSped);
} else {
  CompresoSped = valoreAcquisti + 10;
  console.log("La spedizione costa 10 euro. Il totale è: ", CompresoSped);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7");
let a = 9;
let b = 75;
let c = 54;
let max;
let med;
let min;
if (a > b) {
  max = a;
  min = b;
} else {
  max = b;
  min = a;
}
if (c > max) {
  med = max;
  max = c;
} else if (c < min) {
  med = min;
  min = c;
} else {
  med = c;
}
console.log(max + ", " + med + ", " + min);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 8");
let daVerificare = 5;
let verificaSeNum = typeof daVerificare;
console.log;
if (verificaSeNum !== "number") {
  console.log("Non è un numero");
} else {
  console.log("E'un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let parDisp = 10;
if (parDisp % 2 > 0) {
  console.log(parDisp + " E' dispari");
} else {
  console.log(parDisp + " E' Pari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
  if (val < 5) {
    console.log("Meno di 5");
  }
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"]
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let fromOneToTen = [];
for (let i = 0; i < 10; i++) {
  fromOneToTen[i] = i + 1;
}
console.log(fromOneToTen);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
fromOneToTen[fromOneToTen.length - 1] = 100;
console.log(fromOneToTen);
