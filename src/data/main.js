$(document).ready(function() {
    $('.number').addClass('rotate'); // Avvia l'animazione di rotazione
  
    setTimeout(function() {
      $('.number').removeClass('rotate').addClass('stop'); // Ferma l'animazione alla posizione desiderata
    }, 2000); // Tempo in millisecondi prima di fermare l'animazione
  });