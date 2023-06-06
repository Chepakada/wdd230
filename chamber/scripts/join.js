const select = document.getElementById("membership");
const options = ["NP Membership (No fees for non-profit organizations",
                    "Bronze Membership",
                     "Silver Membership",
                      "Gold Membership"];

select.innerHTML = `<Option value = default>Choose One ...</Option>`
options.map((option)=>{
    var optionEl = `<Option value = option${options.indexOf(option)}> ${option} </Option>`
    select.innerHTML+=optionEl;
})

const timeStamp = document.getElementById("timeStamp");
timeStamp.value = new Date();
console.log(timeStamp.value)

document.getElementById("description").addEventListener("focus", ()=>{
    if (document.getElementById("description").value== "Your Organization's brief introduction "){
    document.getElementById("description").value = ``
}})