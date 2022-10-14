let table_image = [];

// --------------------------------fetch json ----------------------------------
fetch("src/json/dataImage.json").then((para1)=> para1.json()).then((para2)=> {
    // table_image.push(para2[0].link_image)
    table_image =para2[0].link_image;
})

// fetch("src/json/dataImage.json").then((pull)=> pull.json()).then((data)=>console.log(data[0].image));

//-----------------------------tout le Selecteur ---------------------------------------
const img_box = document.getElementsByClassName("img-box");

// --------------------------------tout les Event Listener----------------------------------


// --------------------------------code ----------------------------------
console.log("tab: "+table_image)
console.log(table_image)

// const lisDesEnfantZoneDajoutDesTache = Array.from( ZoneDajoutDesTache.children);
// console.log(data[0].link_image)
/*
(async ()=>{
    await fetch('src/json/dataImage.json')
        .then((para1) => para1.json())
        .then((para2) => {
            img =para2[0].image;
            category=para2[0].category ;
            titre=para2[0].title;
            prix=para2[0].price;
            description=para2[0].description;
            stock=para2[0].rating.count;

        });

    img_box[0].innerHTML =`<img src="${img}" >`;
    nonDeLaCategorie[0].textContent= category;
    titreDeLaCategorie[0].textContent= titre;
    prixDeLaCategorie[0].textContent= prix;
    descriptionDeLaCategorie[0].textContent= description;
    stockDeLaCategorie[0].textContent= stock+" RST";
})();*/
