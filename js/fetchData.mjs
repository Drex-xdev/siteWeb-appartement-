/**
 * function qui permet de recuperer les fichiers photos du json
 * @params {url} string
 * @return {promesse}
 */

export function fetchData(url){


        return new Promise((resolve, reject)=>{
  
              fetch(url)
              .then((response)=>{
                  
                   return response.json();
                  
              }).then((result)=>{
  
                   return resolve(result);
  
              }).catch((error)=>{
  
                   return console.log(error);
  
              })
        
  
        })

}