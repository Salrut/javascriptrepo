let index;
let tier = undefined;


function showUI(){
    //Tier
    let htmlObj = document.getElementById("identification");
    htmlObj.innerHTML =
        `Tierart: ${tier.tierart}<br>`+
        `Name: ${tier.tiername}<br>`+
        `Geschlecht: ${tier.geschlecht}`;


    htmlObj = document.getElementById("allgemeinTitle");
}


function showNext() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (tierListe.length-1 > index){
            index++;
        }
    }
    localStorage.setItem("index", index);
    tier = tierListe[index];
    showUI();
}


function showPrevious() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (index > 0){
            index--;
        }
    }
    localStorage.setItem("index", index);
    tier = tierListe[index];
    showUI();
}



