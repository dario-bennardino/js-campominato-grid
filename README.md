Esercizio 29/02/2024 <br>
Griglia Campo Minato
===
**Consegna**
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;<br>
**Consigli del giorno:**  
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.<br>
PS: la grafica può essere libera a patto che vengano mantenute le funzionalità

## Svolgimento
1. preparo tramite hhml il container e faccio una prova creando i quadrati customizzando con css.
2. selezione il container e lo salvo in una costante
3. resetto
4. faccio un ciclo di 100 ripetizioni
5. ad ogni ciclo creo un quadrato e lo aggiungo alla griglia

### Creazine del quadrato
1. creare l'elemento html
2. associare la classe square
3. associare il valore (numero)
4. associare un listner che al click mostri il valore e faccia il toggle della classe clicked