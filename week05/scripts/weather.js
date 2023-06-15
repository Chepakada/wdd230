const currentTemp =document.querySelector("#current-temp");
const weatherIcon=document.querySelector("#weather-icon");
const captionDesc=document.querySelector("figcaption");


const apiKey = "5c14931591f183c1bf0308ecc66e16c6";

// url = `https://api.openweathermap.org/data/3.0/onecall?lat=49.75&lon=6.64&units=imperial&exclude={daily,hourly}&appid=${apiKey}`;


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
