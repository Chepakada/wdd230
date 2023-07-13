const apiKey = "5c14931591f183c1bf0308ecc66e16c6";
const lat = 27.9288;
const lon = 84.4096;
const cnt = 3;

let url = `https://api.openweathermap.org/data/2.5/forecast?lat=27.9288&lon=84.4096&units=metric&appid=5c14931591f183c1bf0308ecc66e16c6`;


async function apiFetch(url){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            
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
    const weatherBox = document.getElementById("chamberWeathers");

    const dataList = data.list;
    const todayDate = new Date();
    let content = dataList.map((day)=>{
        
        const date = new Date(day.dt_txt);
        const temp = day.main.temp;
        const weatherType = day.weather[0].main;
        const desc = day.weather[0].description;
        const iconCode = day.weather[0].icon;
        const days = ["Today", "Tomorrow", "Day After Tomorrow"]
        const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
        let dayName;
        let time;


        switch(todayDate.getDate()){
            case date.getDate():
                dayName = days[0];
                
                break;
            case (date.getDate()-1):
                dayName = days[1];
                
                break;
            case (date.getDate() -2):
                dayName = days[2]
        }
        time = date.getHours();
       
        
        if (days.includes(dayName)){
        
        return(
            `<div class = "card-box">
            <img src = ${iconSrc}>
            <div> 
                <h3>${dayName} at ${time}:00</h3>

                <h4>Weather Condition: ${weatherType}</h4>
                <h4> Temperature: ${temp}</h4>
                <p>Description: ${desc}</p>

            </div>
            <div>`
        )
        }
    else{
        return ``
    }}

        
    )
    content.map((dayHtml)=> {weatherBox.innerHTML += dayHtml})
}



