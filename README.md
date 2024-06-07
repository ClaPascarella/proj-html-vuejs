PHLOX PRO

Phlox pro è un sito di un agenzia web che si occupa della creazione e mauntanzione di di altri siti web, i principali servizi sono:
Ottimizzazione della velocità del sito
Soluzioni per il cloud
Progettazione del sito
Marketing online

La progettazione del sito è stata divisa in 3 parti:
Giuseppe si cupato della creazione dell'Header, del Carosello e della sezione dei Servizi offerti.
Claudio si è occupato del Main
Matteo si è occupato ...

Il progetto è stato creato con l'utilizzo di javascript con le funzionalità di VUE e VITE; Inoltre per lo style è stato utilizzato BOOTSTRAP.

---------- HEADER

L'Header è stato creato con 3 colonne dove la prima e l'ultima hanno la stessa dimensione, per la colonna centrale la dimansione è maggiore, l'inserimento dei link è stato fatto con un ciclo V-FOR su un array all'interno dello store.

---------- CAROSELLO / JUMBOTRONE

Per il carosello è stata utilizzata una variabile 'slideActive' per tracciare la slide attiva, per il cambiamento delle slide sono state utilizzate 2 funzioni collegate a dei bottoni:
next: per incrementare la variabile 'slideActive' e passare alla slide successiva
back: per decrementare la variabile 'slideActive' e passare alla slide precedente
Gli elementi all'interno sono stati inseriti richiamando un array di oggetti all'interno dello store.

---------- SEZIONE SERVIZI

La sezione dei Servizi è stata creata in maniera più statica inserendo manualmente il titolo e le card dei servizi

----MAIN

Per la creazione del Main è stato diviso in 5 parti:

----SEZIONE 1
Divisa in due colonne: la prima colonna ci sono due immagini con il position: relative e il position: absolute sono riuscito a dare l'effetto sovrapposizione

----SEZIONE 2
Ho creato un Array di immagini per rendere le dimensioni delle immagini tutte uguali e con la proprietà hover, al passaggio del mouse le immagini vanno in scala 1:2

----SEZIONE 3
Con la funzione setInterval ho creato 3 contatori:
il primo parte da 0 e arriva a 280,
il secondo parte da 0 e arriva a 3600
il terzo è in percentuale e parte da 0 e arriva a 100
con la proprità startAnimations i contatori partono tutti insieme con un click

----SEZIONE 4
La sezione 4 è stata divisa in più colonne tramite Bootstrap e lo stile delle Card è stato fatto tramite css

----SEZIONE 5
L'ultima sezione è stata creata sovrapponendo un immagine e un background: black. Modificando le proprità del background ho dato quell'effetto di opacità

---------- TITOLO
titolo della sezione

---------- TRE CARTE
ho creato un componente "card" dove ho preso i dati da un array di oggetti nello store.js e fatto ciclare in un v-for in PageFooter tramite props.

---------- PRIMO BOTTONE
bottone "VEIW ALL POST"

----------DUE CARTE
realizzate creando una struttura di base in html e css prendendo i dati da un array di oggetti "dueCarte" nello store.js.

---------- IMMAGINI PUBBLICITA'
ho creato un componente "cardImage" dove ho preso le immagini che ho messo in un array di oggetti tramite la funzione getImg e fatto ciclare in un v-for in PageFooter tramite props.

---------- QUATTRO COLONNE CON INFO
struttura base in css, informazioni estrapolate da un array di oggetti nello store.js

---------- FASCIONE NERO CON SOCIAL costruito in html semplice con uno span sulla sinistra e 3 icone social sulla destra.
