/*Chiedere all'utente il cognome
inserirlo in un array con altri cognomi:
'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/

var cognomeUtente = prompt('Qual è il tuo cognome?');

var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

//salvo l'input utente nell' array dei cognomi
cognomi.push(cognomeUtente);

var cognomiLowerCase = [];

//rendo tutti gli elementi dell'array cognomi con la lettera minuscola iniziale
for(var i = 0; i < cognomi.length; i++){
  cognomiLowerCase.push(cognomi[i].toLowerCase());
}
//ordino l'array
cognomiLowerCase.sort();

var listaCognomiEl = document.getElementById('listaCognomi');
var vincitoreEl = document.getElementById('vincitore');
var posizione = 0 ;


//inserisco nella lista tutti i cognomi ordinati e con la lettera maiuscola, selezionando anche la poizione dell'input utenteaia
var i = 0;
while ( i < cognomiLowerCase.length){
  listaCognomiEl.innerHTML += '<li>' + cognomiLowerCase[i].charAt(0).toUpperCase() + cognomiLowerCase[i].slice(1) +'</li>';
  if (cognomeUtente.toLowerCase() == cognomiLowerCase[i]){
      posizione = i;
 }
 i++; }

vincitoreEl.innerHTML += (posizione + 1);
