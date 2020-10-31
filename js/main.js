var faja = document.createElement("img")
var iks = document.createElement("img")
var capt
var DANE
const TH = ["", "nominał", "nr kat.", "stop", "rok", "captcha", ""]
const FLAGI = ["ARMENIA", "bosnia_hercegowina", "finlandia", "HONDURAS", "KAJMANY", "LITWA", "MOZAMBIK", "polinezja_francuska", "SOMALIA", "ZAMBIA"]
const STOPY = ["aluminum","aluminum-bronze","bronze","copper plated zinc","copper-nickel","gold","nickel bonded steel","nickel clad steel","silver","stainless steel","zinc"]
var wybrany
function main() {
    faja.alt = "jara"
    faja.src = "img/faja.png"
    iks.alt = "x"
    iks.src = "img/u.gif"
    pobierz()
    budujDodawanie()
}
function budujTabele(dane) {
    DANE = dane
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = ""
    var tr = document.createElement("tr")
    for (let i = 0; i < 7; i++) {
        var th = document.createElement("th")
        th.innerText = TH[i]
        tr.appendChild(th)
    }
    tabela.appendChild(tr)
    dane.forEach(wiersz => budujWiersz(wiersz))
}
function budujWiersz(dane) {
    var tabela = document.getElementById("tabela");
    var tr = document.createElement("tr")
    tr.name = dane.id
    for (let i = 0; i < 7; i++) {
        var td = document.createElement("td")
        switch (i) {
            case 0:
                td.appendChild(budujFlage(dane.flaga))
                break;
            case 1:
                td.innerText = dane.nominal;
                break
            case 2:
                td.innerText = dane.kat;
                break
            case 3:
                td.innerText = dane.stop;
                break
            case 4:
                td.innerText = dane.rok;
                break
            case 5:
                var input = document.createElement("input")
                input.type = "text"
                input.name = "captcha"
                capt = input
                td.appendChild(input)
                break;
            case 6:
                var iks2 = iks.cloneNode(true)
                iks2.onclick = function(){usun("&id="+this.parentElement.parentElement.name+"&captcha="+
                this.parentElement.parentElement.children[5].children[0].value)}
                td.appendChild(iks2)
                break;
        }
        tr.appendChild(td)
    }
    tabela.appendChild(tr)
}
function budujFlage(nazwa) {
    var img = document.createElement("img")
    img.alt = nazwa
    img.src = "img/" + nazwa + ".jpg"
    img.style.height = "25px"
    img.style.width = "50px"
    img.onclick = zmEdycja
    return img
}
function zmEdycja() {
    if(wybrany)
        zmPop()
    var tr = this.parentElement.parentElement.children
    wybrany = this.parentElement.parentElement
    for (let i = 0; i < 7; i++) {
        var td = tr[i]
        //console.log(tr)
        switch (i) {
            case 0:
                var zapis = td.children[0].alt
                var select = document.createElement("select")
                select.name = "flaga"
                for (let j = 0; j < FLAGI.length; j++) {
                    var option = document.createElement("option")
                    option.innerText = FLAGI[j]
                    option.value = FLAGI[j]
                    if (option.value == zapis)
                        option.selected = true;
                    select.appendChild(option)
                }
                td.innerHTML = ""
                td.appendChild(select)
                break;
            case 1:
                var zapis = td.innerText
                var input = document.createElement("input")
                input.type = "text"
                input.name = "nominal"
                input.value = zapis
                td.innerHTML = ""
                td.appendChild(input)
                break
            case 2:
                var zapis = td.innerText
                var input = document.createElement("input")
                input.type = "text"
                input.name = "kat"
                input.value = zapis
                td.innerHTML = ""
                td.appendChild(input)
                break
            case 3:
                var zapis = td.innerText
                var select = document.createElement("select")
                select.name = "stop"
                for (let j = 0; j < STOPY.length; j++) {
                    var option = document.createElement("option")
                    option.innerText = STOPY[j]
                    option.value = STOPY[j]
                    if (option.value == zapis)
                        option.selected = true;
                    select.appendChild(option)
                }
                td.innerHTML = ""
                td.appendChild(select)
                break
            case 4:
                var zapis = td.innerText
                var input = document.createElement("input")
                input.type = "text"
                input.name = "rok"
                input.value = zapis
                td.innerHTML = ""
                td.appendChild(input)
                break
            case 5:   
                capt = td.children[0]
                break;
            case 6:
                td.innerHTML = ""
                var faja2 = faja.cloneNode(true)
                faja2.onclick = function () {
                    edytuj(budujDane(this.parentElement.parentElement))
                    wybrany = undefined
                }
                td.appendChild(faja2)
                break;
        }
    }
}
function zmPop(){
    var tab = wybrany.parentElement.children
    for(let i =0;i<tab.length;i++)
        if(tab[i].name==wybrany.name)
            var id = i-1
    var dane = DANE[id]
    console.log(wybrany.name,DANE)
    for (let i = 0; i < 7; i++) {
        var td = wybrany.children[i]
        if(i!=5)
        td.innerHTML = ""
        switch (i) {
            case 0:
                td.appendChild(budujFlage(dane.flaga))
                break;
            case 1:
                td.innerText = dane.nominal;
                break
            case 2:
                td.innerText = dane.kat;
                break
            case 3:
                td.innerText = dane.stop;
                break
            case 4:
                td.innerText = dane.rok;
                break
            case 5:
                break;
            case 6:
                var iks2 = iks.cloneNode(true)
                iks2.onclick = function(){usun("&id="+wybrany.name+"&captcha="+
                this.parentElement.parentElement.children[5].children[0].value)}
                td.appendChild(iks2)
                break;
        }
    }
}
function budujDodawanie() {
    var tabela = document.getElementById("dodawanie")
    var tr = document.createElement("tr")
    for (let i = 0; i < 7; i++) {
        var td = document.createElement("td")
        switch (i) {
            case 0:
                var select = document.createElement("select")
                select.name = "flaga"
                for (let j = 0; j < FLAGI.length; j++) {
                    var option = document.createElement("option")
                    option.innerText = FLAGI[j]
                    option.value = FLAGI[j]
                    select.appendChild(option)
                }
                td.appendChild(select)
                break;
            case 1:
                var input = document.createElement("input")
                input.type = "text"
                input.name = "nominal"
                td.appendChild(input)
                break
            case 2:
                var input = document.createElement("input")
                input.type = "text"
                input.name = "kat"
                td.appendChild(input)
                break
            case 3:
                var select = document.createElement("select")
                select.name = "stop"
                for (let j = 0; j < STOPY.length; j++) {
                    var option = document.createElement("option")
                    option.innerText = STOPY[j]
                    option.value = STOPY[j]
                    select.appendChild(option)
                }
                td.appendChild(select)
                break
            case 4:
                var input = document.createElement("input")
                input.type = "text"
                input.name = "rok"
                td.appendChild(input)
                break
            case 5:
                var input = document.createElement("input")
                input.type = "text"
                input.name = "captcha"
                td.appendChild(input)
                break;
            case 6:
                var faja2 = faja.cloneNode(true)
                faja2.onclick = function () {
                    dodaj(budujDane(this.parentElement.parentElement))
                }
                td.appendChild(faja2)
                break;
        }
        tr.appendChild(td)
    }
    tabela.appendChild(tr)

}
function pobierz() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "php/serwer.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            var ob = JSON.parse(this.responseText)
            budujTabele(ob)
        }
    };

    xhttp.send("akcja=select");
}
function dodaj(dane) {
    dane = "akcja=insert" + dane
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "php/serwer.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState, this.responseText)
        if (this.readyState == 4 && this.status == 200) {
            pobierz();
        }
    };
    xhttp.send(dane);
}
function edytuj(dane) {
    dane = "akcja=update" + dane
    console.log(dane)
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "php/serwer.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState, this.responseText)
        if (this.readyState == 4 && this.status == 200) {
            pobierz();
        }
    };
    xhttp.send(dane);
}
function usun(dane){
    dane = "akcja=delete" + dane
    console.log(dane)
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "php/serwer.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState, this.responseText)
        if (this.readyState == 4 && this.status == 200) {
            pobierz();
        }
    };
    xhttp.send(dane);
}
function budujDane(wiersz) { // klik w faję
    if (true) { // captcha
        var dane = ""
        if(wiersz.name)
            dane = "&id="+wiersz.name
        var tr = wiersz.children
        for (let i = 0; i < 6; i++) {
            var td = tr[i].children[0]
            dane += "&" + td.name + "=" + td.value
        }
        console.log(dane)
        return dane
    }
    return {}
}