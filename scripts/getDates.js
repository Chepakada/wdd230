const date= new Date()
document.getElementById("year").innerText =  date.getFullYear()


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