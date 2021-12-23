let hourHand = document.getElementById("hour-hand");
let minutesHand = document.getElementById("minutes-hand");
let secondsHand = document.getElementById("seconds-hand");

setInterval(setClock, 1000)

function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 60
    
    setRotation(secondsHand, secondsRatio)
    setRotation(minutesHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotation){
    // console.log(element)
    // console.log(rotation * 360)
    element.style.setProperty('--rotation', rotation * 360)
}

setClock();