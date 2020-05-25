//tiro del dado
var buttonDado = document.getElementById('button');
var risultato = document.getElementById('risultato');
var numGiocatore;
var numComputer;

buttonDado.addEventListener('click',
function (){
  // calcolo del dado
  numGiocatore = Math.floor(Math.random() * 6 ) + 1;
  console.log(numGiocatore);
  numComputer = Math.floor(Math.random() * 6 ) + 1;
  console.log(numComputer);
  if(numComputer > numGiocatore){
    risultato.innerHTML = 'I dadi rotolano.. il tuo avversario ottiene' + ' ' + numComputer + ' ' + ', tu ottieni' + ' ' + numGiocatore + '. Il tuo avversario vince!';
  } else if (numComputer < numGiocatore){
    risultato.innerHTML = 'I dadi rotolano.. il tuo avversario ottiene' + ' ' + numComputer + ' ' + ', tu ottieni' + ' ' + numGiocatore + '. Tu vinci!';
  } else{
    risultato.innerHTML = 'I dadi rotolano.. il tuo avversario ottiene' + ' ' + numComputer + ' ' + ', tu ottieni' + ' ' + numGiocatore + '. La partita termina in parità!';
  }
}
);
