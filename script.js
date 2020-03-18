// TODO: add code here
window.addEventListener("load", function () {
 fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(json){
         const container = document.getElementById("container");

         for(let i = 0; i < json.length; i++) {
             let div = `
             <div class=astronaut>
             <h3>${json[i].firstName + " " + json[i].lastName}</h3>         
                <ul>
                    <li>Skills: ${json[i].skills}</li>
                    <li>Hours in Space: ${json[i].hoursInSpace}</li>
                    <li>Active: ${json[i].active}</li>
                </ul>
                <img class="avatar" src="${json[i].picture}"/>
            </div>
             `
             container.innerHTML += div;
         }
    })

 })
   

            
            // for(each of json) {
        //         container.innerHTML = `
        //     <div class="astronaut">
        //         <ul>
        //             <li>First Name: ${json[index].firstName}</li>
        //             <li>Last Name: ${json.lastName}</li>
        //             <li>Hours in Space: ${json.hoursInSpace}</li>
        //             <li>Active: ${json.active}</li>
        //             <img class="avatar" src=${json.picture}/>
        //         </ul>
        //     </div>
        //  `;
        // container.innerHTML += JSON.stringify(each);
        // container.innerHTML += each;
            // }
        //  console.log(json);
        });



