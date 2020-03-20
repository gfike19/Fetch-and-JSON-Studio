// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const container = document.getElementById("container");

            let order = [json[0].id];
            let id = json[0].id;
            let hrs = json[id].hoursInSpace;
            for (let i = 1; i < json.length; i++) {
                let currentHrs = json[i].hoursInSpace;

                if (currentHrs > hrs) {
                    order.push(json[i].id)
                }
                else {
                    order.unshift(json[i].id)
                }
            }

            for(let each of order) {
                let num = each -1;
            // for (let i = 0; i < json.length; i++) {
                let div = `
             <div class=astronaut>
             <h3>${json[num].firstName + " " + json[num].lastName}</h3>         
                <ul>
                    <li>Skills: ${json[num].skills}</li>
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

});



