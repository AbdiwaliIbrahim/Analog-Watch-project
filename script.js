const hours=document.querySelector(".number-hours")
const barSeconds=document.querySelector(".bar-seconds")
const numbers=[]
const barElement=[]
for(let i=1;i<=12;i++){
    numbers.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
        
    )
    // console.log(numbers);
}
// hours.insertAdjacentHtml("afterbegin",numbers.join(""));
hours.insertAdjacentHTML("afterbegin",numbers.join(""))


// create bar seconds

for(let i=1;i<=60;i++){
    barElement.push(
        `<span style="--index:${i}"><p></p></span>`
    )
}
barSeconds.insertAdjacentHTML("afterbegin",barElement.join(""))
const handSeconds=document.querySelector('.seconds')
const handMinutes=document.querySelector('.minutes')
const handHours=document.querySelector('.hours')
console.log(handSeconds);
function getCurrentTime(){
   console.log(handSeconds);
    let date=new Date();
    let currentHours= date.getHours()
    let currentMInutes= date.getMinutes()
   const currentSeconds= date.getSeconds()
    console.log();
    handSeconds.style.transform= `rotate(${currentSeconds * 6}deg)`;
    handMinutes.style.transform = `rotate(${currentMInutes * 6}deg)`;
    handHours.style.transform = `rotate(${currentHours * 30 + currentMInutes/2}deg)`;
}

// setInterval(getCurrentTime, 1000);
setInterval(getCurrentTime,1000)
getCurrentTime();