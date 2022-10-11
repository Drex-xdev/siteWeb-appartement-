//-----------------------------tout le Selecteur ---------------------------------------


// --------------------------------tout les Event Listener----------------------------------



fetch("src/json/dataImage.json").then((pull)=> pull.json()).then((data)=>console.log(data));


fetch("src/json/dataImage.json").then((pull)=> pull.json()).then((data)=>console.log(data[0].image));

const ZoneDajoutDesTache = document.querySelector(
    ".art-box"
);

const ae = document.getElementsByClassName("art-box");

const lisDesEnfantZoneDajoutDesTache = Array.from( ZoneDajoutDesTache.children);
console.log(lisDesEnfantZoneDajoutDesTache)
