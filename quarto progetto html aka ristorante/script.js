async function onLoadSetup(){
    let elemento = document.getElementById("scatoletta");
    elemento.innerHTML = `
                <div class="allinea">
                    <img src="immaginine/bistecconaBromo.jpg" alt="Immagine non trovata" class="immaginePrimi">
                    <p class="testoPrimi"><strong class="nomiPiatti">BISTECCA AL BROMO </strong> <br>Un secondo piatto di carne squisito, una bisteccona farcita con bromo dragonfly! <strong>Prezzo:21.50€</strong></p>
                </div>
                
                <div class="allinea">
                    <img src="immaginine/spezzatinoPiselli.jpg" alt="Immagine non trovata" class="immaginePrimi">
                    <p class="testoPrimi"><strong class="nomiPiatti">SPEZZATINO BOLLITO </strong> <br>Sempre bistecca ma questa volta combinata con dei piselli megagalattici, patate e altre verdurine! <strong>Prezzo: 17.50€</strong></p>
                </div>

                <div class="allinea">
                    <img src="immaginine/salmone_900x760.webp" alt="Immagine non trovata" class="immaginePrimi">
                    <p class="testoPrimi"><strong class="nomiPiatti">SALMONE NORVEGESE </strong> <br>Salmone speziato pescato direttamente dai mari norvegesi da quel matto di <a href="https://www.ubisoft.com/it-it/game/rainbow-six/siege/game-info/operators/tachanka"> Kirianov</a>! <strong>Prezzo: 28€</strong></p>
                </div>

                <div class="allinea">
                    <img src="immaginine/meglio-tonno-fresco-o-in-scatola.jpg" alt="Immagine non trovata" class="immaginePrimi">
                    <p class="testoPrimi"><strong class="nomiPiatti">TONNO IN SCATOLA </strong> <br>Tonno in scatola e pomodori conditi con 1 foglia di insalata! <strong>Prezzo: 15€</strong></p>
                </div>

                <div class="allinea">
                    <img src="immaginine/collegaPesce.jpg" alt="Immagine non trovata" class="immaginePrimi">
                    <p class="testoPrimi"><strong class="nomiPiatti">PESCE NERO DI FONDALE </strong> <br>Pesce nero di fondale pescato dal nostro collega Fabrizio in persona e condito con varie spezie!<strong>Prezzo: 30€</strong></p>
                </div>`;

    let elemento2 = document.getElementById("scatolettina");
    elemento2.innerHTML = `
                    
                ${verde("immaginine/IMG_5934.jpeg", "FOCACCINA DEL GINGIO", "Ficaccina con olive, insalata, LA sauce, pomodorini secchi e tacchino. La ricetta è stata ideata e realizzata dal Maestro Gingio!", "100€")}
                
                ${verde("immaginine/kfc.webp", "POLLO FRITTO", "Pollo fritto direttamente rubato dal KFC e accompagnato da due salse a piacere (Selezionabili: ketchup, maionese, la sauce viola, la sauce gialla e mostarda)!", "23€")}
            
                ${verde("immaginine/orata-padella-finale.avif", "ORATA CON LE PATATE", "Piatto composto da un orata e delle patate verdi (anche se nell'immagine sono gialle) coltivate da <a href=https://www.ladolcevitainteriore.it/shrek-psicologia/>Guido Michieletto</a>!", "14,50€")}

                ${verde("immaginine/sito-.webp", "UOVA ALLA CONTADINA", "Uova alla contadina prodotte da delle galline in un allevamento intensivo nella Pianura Padana!", "20€")}
                
                ${verde("immaginine/cotoletta-alla-milanese.jpeg", "COTOLETTA CON LE PATATE", "Cotoletta con le patatine se non sei in grado di scegliere uno dei nostri mirabolanti piattoni! ", "10€")}`;
}

function verde(img, nome, descrizione, prezzo) {
    return `<div class="allinea">
        <img src=${img} alt="Immagine non trovata" class="immaginePrimi"></img>
        <p class="testoPrimi"><strong class="nomiPiatti">${nome} </strong> <br>${descrizione}<strong>Prezzo: ${prezzo}</strong></p>
    </div>`
}