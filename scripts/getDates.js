const date= new Date()
document.getElementById("year").innerText =  date.getFullYear()

const nlastModified = document.lastModified

document.getElementById("last-modified").innerHTML = `Last Modified : ${nlastModified}`

const currentTemp =document.querySelector("#current-temp");
const weatherIcon=document.querySelector("#weather-icon");
const captionDesc=document.querySelector("figcaption");

const apiKey = "5c14931591f183c1bf0308ecc66e16c6";



let url = `https://api.openweathermap.org/data/3.0/onecall?lat=27.9288&lon=84.4096&exclude={daily,hourly}&appid=${apiKey}`;


async function apiFetch(url){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data)
            displayResults(data)
        }
        else{
            throw(Error(await response.text()))
        }
    }
    catch (error){
        console.log(error);
    }
}

apiFetch(url);

function displayResults(data){
    currentTemp.innerHTML= `${data.current.temp}`
    const iconCode = data.current.weather[0].icon
    const desc = data.current.weather[0].main
    const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`

    document.getElementById("weather-icon").setAttribute("src", iconSrc);
    document.getElementById("weather-icon").setAttribute("alt", desc)
    document.querySelector("figcaption").textContent = desc

}

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    navigation.setAttribute("display", "show")
});

const sheet = document.styleSheets[0]
const body = document.querySelector("body");
const mode = document.querySelector("#mode");
const main = document.querySelector("main");
const h2 = document.querySelector("h2")

mode.addEventListener("mouseenter", ()=>{
	mode.textContent += "  Darkmode"
})
mode.addEventListener("mouseleave", ()=>{
	mode.textContent = "✺";
})

mode.addEventListener("click", ()=>{
	if (mode.textContent.includes("✺")){
		
		body.style.color = "black";
		mode.textContent = "⎋";
		mode.style.color="white"
		sheet.cssRules[1].style.backgroundColor = 'black';
		body.style.backgroundColor = "black";
		main.style.backgroundColor = "black";
		h2.style.backgroundColor = "black";
		mode.style.backgroundColor = "black"
		
	}
	else{
		mode.style.color="black"
		body.style.backgroundColor = "aliceblue";
		body.style.color = "#2A0750";
		mode.textContent = "✺"
		sheet.cssRules[1].style.backgroundColor = 'aliceBlue';
		main.style.backgroundColor = "aliceBlue";
		h2.style.backgroundColor = "aliceBlue";
		mode.style.backgroundColor = "aliceBlue"
	}
	
})

const visitsDisplay = document.querySelector("#number-of-visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (numVisits !== 0) {
	visitsDisplay.innerHTML = `Number of visits: ${numVisits}`;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);