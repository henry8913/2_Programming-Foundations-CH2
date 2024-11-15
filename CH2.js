let intestazione = "Henry G."
console.log(intestazione);
document.getElementById('headline').innerText = intestazione;

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
- "Number": È come contare oggetti. Puoi contare mele, matite o anche i tuoi giocattoli.
- "String": È come le parole. Se vuoi scrivere il tuo nome o dire "ciao" al computer, usi una stringa.
- "Boolean": È come rispondere a una domanda con sì o no. È vero che ti piace il gelato? Vero (true) o falso (false)!
- "Undefined": È come avere una scatola senza niente dentro. Non sappiamo ancora cosa metterci.
- "Null": È come decidere che una scatola deve restare vuota. Niente dentro, e va bene così.
- "BigInt": È per numeri molto, molto grandi, come contare tutte le stelle nel cielo.
- "Symbol": È come avere un segreto che solo tu conosci. Può essere qualcosa di speciale che usi nel tuo codice che 
    nessun altro può vedere o usare.
*/

let ESERCIZIO_1 = {
    uno: "Number: È come contare oggetti. Puoi contare mele, matite o anche i tuoi giocattoli.",
    due: "String: È come le parole. Se vuoi scrivere il tuo nome o dire 'ciao' al computer, usi una stringa.",
    tre: "Boolean: È come rispondere a una domanda con sì o no. È vero che ti piace il gelato? Vero (true) o falso (false)!",
    quattro: "Undefined: È come avere una scatola senza niente dentro. Non sappiamo ancora cosa metterci.",
    cinque: "Null: È come decidere che una scatola deve restare vuota. Niente dentro, e va bene così.",
    sei: "BigInt: È per numeri molto, molto grandi, come contare tutte le stelle nel cielo.",
    sette: "Symbol: È come avere un segreto che solo tu conosci. Può essere qualcosa di speciale che usi nel tuo codice che nessun altro può vedere o usare..",
}

console.log(ESERCIZIO_1.uno);
console.log(ESERCIZIO_1.due);
console.log(ESERCIZIO_1.tre);
console.log(ESERCIZIO_1.quattro);
console.log(ESERCIZIO_1.cinque);
console.log(ESERCIZIO_1.sei);
console.log(ESERCIZIO_1.sette);

document.getElementById('demo1').innerText = ESERCIZIO_1.uno;
document.getElementById('demo2').innerText = ESERCIZIO_1.due;
document.getElementById('demo3').innerText = ESERCIZIO_1.tre;
document.getElementById('demo4').innerText = ESERCIZIO_1.quattro;
document.getElementById('demo5').innerText = ESERCIZIO_1.cinque;
document.getElementById('demo6').innerText = ESERCIZIO_1.sei;
document.getElementById('demo7').innerText = ESERCIZIO_1.sette;





//____________//____________//____________//____________//____________//____________//____________//

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/*
Un oggetto in JavaScript è come uno zaino che può contenere molte cose diverse. Immagina di avere uno zaino per andare a scuola: dentro ci metti il quaderno, la penna, il pranzo e forse anche un giocattolo.
*/

let ESERCIZIO_2 = "Un oggetto in JavaScript è come uno zaino che può contenere molte cose diverse. Immagina di avere uno zaino per andare a scuola: dentro ci metti il quaderno, la penna, il pranzo e forse anche un giocattolo."

console.log(ESERCIZIO_2)

document.getElementById('paragrafo').innerText = ESERCIZIO_2;



//____________//____________//____________//____________//____________//____________//____________//

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 +20

console.log(somma);
document.getElementById('ESERCIZIO_3').innerText = somma;

//____________//____________//____________//____________//____________//____________//____________//

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

console.log(x);
document.getElementById('ESERCIZIO_4').innerText = x;

//____________//____________//____________//____________//____________//____________//____________//

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'Henry'

console.log(name);
document.getElementById('ESERCIZIO_5').innerText = name;

//____________//____________//____________//____________//____________//____________//____________//

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x

console.log(sottrazione);
document.getElementById('ESERCIZIO_6').innerText = sottrazione;

//____________//____________//____________//____________//____________//____________//____________//

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let Name1 = 'john'
let Name2 = 'John'
console.log(Name1 === Name2)
console.log(Name1.toLowerCase() === Name2.toLowerCase())

document.getElementById('ESERCIZIO_7a').innerText = (Name1 === Name2);
document.getElementById('ESERCIZIO_7b').innerText = (Name1.toLowerCase() === Name2.toLowerCase());



//____________//____________//____________//____________//____________//____________//____________//



