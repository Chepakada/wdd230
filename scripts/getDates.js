const date= new Date()
document.getElementById("year").innerText =  date.getFullYear()

const nlastModified = document.lastModified

document.getElementById("last-modified").innerHTML = `Last Modified : ${nlastModified}`
// const ipaddress =() =>
// {
//     let ipAddress;
//     fetch('http://api.ipify.org/')
//     .then(response => response.json())
//     .then(data => {
//     ipAddress = data.ip;
//     console.log(ipAddress)
    
//     })
//     .catch(error => {
//     console.error(error);
    
//     });
//     return ipAddress
// }


// let url = `http://dataservice.accuweather.com/locations/v1/cities/${ipaddress()}`

// async function getWeater(url){
//     let response =await fetch(url, {mode:"no-cors"});
//     if (response.ok){
//         console.log(response.json())
//     }

// }

// getWeater(url)
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
		
		body.style.color = "white";
		mode.textContent = "⎋";
		sheet.cssRules[1].style.backgroundColor = 'black';
		body.style.backgroundColor = "black";
		main.style.backgroundColor = "black";
		h2.style.backgroundColor = "black";
		mode.style.backgroundColor = "black"
		
	}
	else{
		body.style.backgroundColor = "aliceblue";
		body.style.color = "#2A0750";
		mode.textContent = "✺"
		sheet.cssRules[1].style.backgroundColor = 'aliceBlue';
		main.style.backgroundColor = "aliceBlue";
		h2.style.backgroundColor = "aliceBlue";
		mode.style.backgroundColor = "aliceBlue"
	}
	
})
