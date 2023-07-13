function  dataRetriever(){
    fetch("./data/businessMem.json")
        .then(response => response.json())
        .then(data =>{
            
            members(data)
        })
        .catch(error =>{
            console.log(error)
        })
}

var card = document.getElementById("business")



const members = (dat)=> {
    const indices = [];
    const data = dat.filter(datas => {
        if (["Gold Membership", "Silver Membership"].includes(datas.memLevel)){
           
            return datas
        }
})
    const randIndex = () =>{
        
        const num =  Math.floor(Math.random() * data.length);
      
        if (!indices.includes(num)){
            indices.push(num)
            
        return num
        }
        else{
            
            return randIndex();
        }
    }


    const randomData = [data[randIndex()], data[randIndex()], data[randIndex()]];
    
    renderer(randomData);
}

const renderer = (businesses) =>{
businesses.map((element) =>{
    
var business_card = document.createElement("div")
business_card.setAttribute("class", "card-box")
business_card.innerHTML = `<img src = "${element.img}" alt= ${element.title}>
                            <h2>${element.title}</h2>`


card.appendChild(business_card)
}

)
}

dataRetriever()