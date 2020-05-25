//inserici la tua mail
var emailElement = prompt("inserisci qui la tua mail");
var titolo = document.getElementById('titolo');
 // condizione iniziale
var emailPresente = false;

// lista email
var listaEmail = ['nome.cognome@email.it', 'robby.star@server.com', 'ermenegilda@hotmail.it', 'desdemona@outlook.com', 'grimilde@esempio.com', 'giampier@gmail.com'];

// elaborazione controllo lista
  for( var i = 0; i < listaEmail.length ; i++){

    // controllo lista con email
     if (listaEmail[i] === emailElement ){

      // trasformala in affermazione vera
      emailPresente = true;
    }
  }

if (emailPresente){
  // la mail è Presente
  titolo.innerHTML = 'LA TUA MAIL E\' PRESENTE NEL SISTEMA';

} else {

  // la mail non è Presente
  titolo.innerHTML = 'LA TUA MAIL NON E\' PRESENTE NEL SISTEMA';
}
