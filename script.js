// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const container = document.getElementById("container");

            for (let i = 0; i < json.length; i++) {
                let div = `
             <div class=astronaut>
             <h3>${json[i].firstName + " " + json[i].lastName}</h3>         
                <ul>
                    <li>Skills: ${json[i].skills}</li>
                    <li>Hours in Space: ${json[i].hoursInSpace}</li>
                    `

                if (json[i].active == true) {
                    div += `<li color="green">Active: ${json[i].active}</li>`;
                } else {
                    div += `<li color="red">Active: ${json[i].active}</li>`;
                }
                div += `</ul>
                <img class="avatar" src="${json[i].picture}"/>
            </div>
             `
                container.innerHTML += div;
            }
        })

    })

});



