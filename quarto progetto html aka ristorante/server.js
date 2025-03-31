function loadDesserts() {
    let nav = document.getElementById("kkk");
    nav.innerHTML = `
            <div class="container text-center">
                <div class="row">
                    <div class="col text-center cellaNav">
                        <a href="index.html">Home</a>
                    </div>
                    <div class="col text-center cellaNav">
                        <a href="primi.html ">Primi piatti</a>
                    </div>
                    <div class="col text-center cellaNav">
                        <a href="secondi.html">Secondi piatti</a>
                    </div>
                    <div class="col text-center cellaNav">
                        <a href="contatti.html">Contatti</a>
                    </div>
                </div>
            </div>`;

    var url = "http://192.168.4.59:8000/";

    fetch(url + "elencoTorte").then(
        response => response.json()
    ).then((data) => {
        var torte = "";
        data.forEach(element => {
            torte += `
                <div class="allinea">
                    <img src="` + url + `/images/` + element.fileImg + `" alt="Immagine non trovata" class="immaginePrimi">
                    <p class="testoPrimi"><strong class="nomiPiatti">` + element.nome + `</strong> <br>` + element.descrizione + `<strong>Prezzo:` + (parseInt) (Math.random() * (20 - 9) + 9) + `€</strong></p>
                </div>`;
        });
        let immissioneTorte = document.getElementById("torte");
        immissioneTorte.innerHTML = torte;
    }).catch(error => console.log("Si è verificato un errore! "))

    fetch(url + "elencoGelati").then(
        response => response.json()
    ).then((data) => {
        var gelati = "";
        data.forEach(element => {
            gelati += `
                <div class="allinea">
                    <img src="` + url + `/images/` + element.fileImg + `" alt="Immagine non trovata" class="immaginePrimi">
                    <p class="testoPrimi"><strong class="nomiPiatti">` + element.nome + `</strong> <br>` + element.descrizione + `<strong>Prezzo:` + (parseInt) (Math.random() * (20 - 9) + 9) + `€</strong></p>
                </div>`;
        });
        let immissioneGelati = document.getElementById("gelati");
        immissioneGelati.innerHTML = gelati;
    }).catch(error => console.log("Si è verificato un errore! "))
}