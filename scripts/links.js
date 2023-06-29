function dataRetriever(){
fetch("./data/links.json")
    .then(response =>response.json())
    .then(data=>{
        console.log(data);
        setLearning(data)
        
    })
    .catch(error =>{
        console.log(error)
        return null
    })
}

dataRetriever()

const setLearning= (data) =>{
    const learning_list = document.getElementById("learning_list")
    let weekNum = document.createElement("div");
    var break_line = document.createElement("br");
    
    data.weeks.map((week)=>{
        weekNum.innerHTML += `<br>${week.week} <br> `,
       
        week.links.map((content)=>{
            let weekContent = document.createElement("a")
            weekContent.href = content.url;
            weekContent.innerText = content.title;
            weekNum.appendChild(weekContent);
        })
        learning_list.appendChild(weekNum);
        learning_list.appendChild(break_line);
        
    })


}