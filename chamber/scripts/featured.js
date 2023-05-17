var card = document.getElementById("business")



var businesses = [
    {title : "The Famous Farm",
    source : "something",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/02/73/7b/the-famous-farm.jpg?w=2000&h=-1&s=1"},
    {
    title : "Siddartha Hotel",
    source : "something",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f5/6d/30/hotel-water-tower-nuwakot.jpg?w=1400&h=-1&s=1"
    },
    {
        title : "Hungry Eye",
    source : "something",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/44/fc/d7/nice-deck-for-lunch-with.jpg?w=1100&h=-1&s=1"
},
{
    title:"something",
    source:"something",
    img : "somewhere"
}
]
businesses.map((element) =>{
var business_card = document.createElement("div")
business_card.setAttribute("class", "card-box")
business_card.innerHTML = `<img src = "${element.img}" alt= "the famous farm">
                            <h2>${element.title}</h2>`


card.appendChild(business_card)
}
)