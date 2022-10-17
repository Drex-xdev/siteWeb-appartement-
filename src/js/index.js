import { fetchData, displayPhoto } from "./actionsData.mjs";

function LoardImage() {
  fetchData("./src/json/img.json").then((response) => {
    const photographers = response.img;

    displayPhoto(photographers);
  });
}

LoardImage();
