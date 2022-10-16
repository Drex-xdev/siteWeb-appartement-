import { fetchData } from "./fetchData.mjs"
import {displayPhoto} from "./displayPhoto.mjs"


document.addEventListener("DOMContentLoaded",()=>{

    fetchData("../data/img.json").then((response)=>{

        const photographers = response.img

        displayPhoto(photographers)
    })

    
})