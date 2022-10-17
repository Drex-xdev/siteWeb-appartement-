/**
 * function qui permet de recuperer les fichiers photos du json
 * @params {url} string
 * @return {promesse}
 */

export function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return resolve(result);
      })
      .catch((error) => {
        return console.log(error);
      });
  });
}

/**
 * Fonction qui rend affiche du HTML dans le DOM
 * @param {domNode} domNode
 * @return {string} htmlElements
 */
export function render(domNode, htmlElements) {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      domNode.innerHTML = htmlElements;

      resolve("noeud de DOM ajoute");
    }, domNode);
  });
}

/**
 * function qui permet d afficher les photos
 * @params {arrayOfPhotos} []
 * @return {render}
 */
export function displayPhoto(arrayOfPhotos) {
  let photoHTML = "";

  arrayOfPhotos.forEach((arrayOfPhoto) => {
    photoHTML += `
    <div class="main-paysage-information">
    <div class="main-paysage-information-image">
      <img src="/src/image/${arrayOfPhoto.portrait}" alt="${arrayOfPhoto.alt}" />
    </div>
    <h4>${arrayOfPhoto.name}</h4>
    <p class="art-box-prg">${arrayOfPhoto.description}</p>
    <div class="ft-box">
      <p>${arrayOfPhoto.category}</p>
      <div class="ft-icon-box">
        <div class="heart-likes">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NzQuNjQ0LDc0LjI3QzQ0OS4zOTEsNDUuNjE2LDQxNC4zNTgsMjkuODM2LDM3NiwyOS44MzZjLTUzLjk0OCwwLTg4LjEwMywzMi4yMi0xMDcuMjU1LDU5LjI1DQoJCQljLTQuOTY5LDcuMDE0LTkuMTk2LDE0LjA0Ny0xMi43NDUsMjAuNjY1Yy0zLjU0OS02LjYxOC03Ljc3NS0xMy42NTEtMTIuNzQ1LTIwLjY2NWMtMTkuMTUyLTI3LjAzLTUzLjMwNy01OS4yNS0xMDcuMjU1LTU5LjI1DQoJCQljLTM4LjM1OCwwLTczLjM5MSwxNS43ODEtOTguNjQ1LDQ0LjQzNUMxMy4yNjcsMTAxLjYwNSwwLDEzOC4yMTMsMCwxNzcuMzUxYzAsNDIuNjAzLDE2LjYzMyw4Mi4yMjgsNTIuMzQ1LDEyNC43DQoJCQljMzEuOTE3LDM3Ljk2LDc3LjgzNCw3Ny4wODgsMTMxLjAwNSwxMjIuMzk3YzE5LjgxMywxNi44ODQsNDAuMzAyLDM0LjM0NCw2Mi4xMTUsNTMuNDI5bDAuNjU1LDAuNTc0DQoJCQljMi44MjgsMi40NzYsNi4zNTQsMy43MTMsOS44OCwzLjcxM3M3LjA1Mi0xLjIzOCw5Ljg4LTMuNzEzbDAuNjU1LTAuNTc0YzIxLjgxMy0xOS4wODUsNDIuMzAyLTM2LjU0NCw2Mi4xMTgtNTMuNDMxDQoJCQljNTMuMTY4LTQ1LjMwNiw5OS4wODUtODQuNDM0LDEzMS4wMDItMTIyLjM5NUM0OTUuMzY3LDI1OS41NzgsNTEyLDIxOS45NTQsNTEyLDE3Ny4zNTENCgkJCUM1MTIsMTM4LjIxMyw0OTguNzMzLDEwMS42MDUsNDc0LjY0NCw3NC4yN3ogTTMwOS4xOTMsNDAxLjYxNGMtMTcuMDgsMTQuNTU0LTM0LjY1OCwyOS41MzMtNTMuMTkzLDQ1LjY0Ng0KCQkJYy0xOC41MzQtMTYuMTExLTM2LjExMy0zMS4wOTEtNTMuMTk2LTQ1LjY0OEM5OC43NDUsMzEyLjkzOSwzMCwyNTQuMzU4LDMwLDE3Ny4zNTFjMC0zMS44MywxMC42MDUtNjEuMzk0LDI5Ljg2Mi04My4yNDUNCgkJCUM3OS4zNCw3Mi4wMDcsMTA2LjM3OSw1OS44MzYsMTM2LDU5LjgzNmM0MS4xMjksMCw2Ny43MTYsMjUuMzM4LDgyLjc3Niw0Ni41OTRjMTMuNTA5LDE5LjA2NCwyMC41NTgsMzguMjgyLDIyLjk2Miw0NS42NTkNCgkJCWMyLjAxMSw2LjE3NSw3Ljc2OCwxMC4zNTQsMTQuMjYyLDEwLjM1NGM2LjQ5NCwwLDEyLjI1MS00LjE3OSwxNC4yNjItMTAuMzU0YzIuNDA0LTcuMzc3LDkuNDUzLTI2LjU5NSwyMi45NjItNDUuNjYNCgkJCWMxNS4wNi0yMS4yNTUsNDEuNjQ3LTQ2LjU5Myw4Mi43NzYtNDYuNTkzYzI5LjYyMSwwLDU2LjY2LDEyLjE3MSw3Ni4xMzcsMzQuMjdDNDcxLjM5NSwxMTUuOTU3LDQ4MiwxNDUuNTIxLDQ4MiwxNzcuMzUxDQoJCQlDNDgyLDI1NC4zNTgsNDEzLjI1NSwzMTIuOTM5LDMwOS4xOTMsNDAxLjYxNHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
            width="15"
          />
          <span>${arrayOfPhoto.likes}k</span>
        </div>
        <div class="heart-likes">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTU0LDJINkMyLjc0OCwyLDAsNC43NDgsMCw4djMzYzAsMy4yNTIsMi43NDgsNiw2LDZoOHYxMGMwLDAuNDEzLDAuMjU0LDAuNzg0LDAuNjM5LDAuOTMzQzE0Ljc1Nyw1Ny45NzgsMTQuODc5LDU4LDE1LDU4DQoJYzAuMjc2LDAsMC41NDctMC4xMTUsMC43NC0wLjMyN0wyNS40NDIsNDdINTRjMy4yNTIsMCw2LTIuNzQ4LDYtNlY4QzYwLDQuNzQ4LDU3LjI1MiwyLDU0LDJ6IE01OCw0MWMwLDIuMTY4LTEuODMyLDQtNCw0SDI3LjE3OQ0KCWwzLjU3OS00LjE2MWMwLjM2LTAuNDE4LDAuMzEzLTEuMDUtMC4xMDYtMS40MWMtMC40MTgtMC4zNi0xLjA1MS0wLjMxMi0xLjQxMSwwLjEwNmwtNC45OTgsNS44MTFMMTYsNTQuNDE0VjQ2YzAtMC41NTItMC40NDgtMS0xLTENCglINmMtMi4xNjgsMC00LTEuODMyLTQtNFY4YzAtMi4xNjgsMS44MzItNCw0LTRoNDhjMi4xNjgsMCw0LDEuODMyLDQsNFY0MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
            width="15"
          />
          <span>${arrayOfPhoto.comments}</span>
        </div>
      </div>
    </div>
  </div>
        `;
  });
  return render(document.querySelector(".main-paysage"), photoHTML);
}
