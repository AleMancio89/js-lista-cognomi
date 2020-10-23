var cognomeUtente = prompt('Qual è il tuo cognome?');

var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];


cognomi.push(cognomeUtente);
cognomi.sort();

console.log(cognomi);

var listaCognomiEl = document.getElementById('listaCognomi');
var vincitoreEl = document.getElementById('vincitore');
var posizione = 0 ;

for (var i = 0; i < cognomi.length; i++) {
  listaCognomiEl.innerHTML += '<li>' + cognomi[i] +'</li>';
  if (cognomeUtente == cognomi[i]){
    posizione = i;
  }
}

vincitoreEl.innerHTML += (posizione + 1);
