const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphets(url){
    let response = await fetch(url)
        if (response.ok){
            let data = await response.json()
            console.log(data)
            displayProphets(data.prophets)
            return data
        }
        else{
            console.log("err. couldn't fetch data")
            return []
        }
}


function displayProphets(prophets){

    console.log(prophets)

    prophets.map((prophet)=>{
        let card = document.createElement('div')
        let fullName = document.createElement("h2")
        let portrait = document.createElement("img");
        
        card.setAttribute("class", "card")
        fullName.innerText = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", prophet.imageurl)
        card.appendChild(fullName);
        card.appendChild(portrait);
        portrait.setAttribute("height", "400");
        portrait.setAttribute("width", "300")
        portrait.setAttribute("loading", "lazy");
        cards.appendChild(card)
    })
}
getProphets(url)