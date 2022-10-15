let table_image = [];

//-----------------------------tout le Selecteur ---------------------------------------
const art_box = document.querySelectorAll(".art-box");

// --------------------------------code ----------------------------------

async function fetchImage(){
    await fetch("src/json/dataImage.json")
        .then((para1)=> para1.json())
        .then((para2)=> {
            table_image = para2;
        })

    let i =-1;
    art_box.forEach((el)=>{
        
        el.addEventListener('click', (enfant)=>{
            
            // console.log(enfant)
        })
        
        i++;
        el.children[0].innerHTML =  `<img src="${table_image[i].link_image}"  alt="${table_image[i].alt}">`;
        el.children[1].textContent= table_image[i].titre;
        el.children[2].textContent= table_image[i].prix;
        el.children[3].children[0].textContent= table_image[i].category;
        console.log()
    })
}

fetchImage();



// const lisDesEnfantZoneDajoutDesTache = Array.from( ZoneDajoutDesTache.children);