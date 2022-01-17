setInterval(setclock, 1000)

const hourhand = document.querySelector('[data-hour-hand]');

const minutehand = document.querySelector('[data-minute-hand]');

const secondhand = document.querySelector('[data-second-hand]');

function setclock(){
    const getCurrentDate = new Date();
    const second = getCurrentDate.getSeconds() / 60;
    const minute =  (second + getCurrentDate.getMinutes()) / 60;
    const hour1 = (minute  + getCurrentDate.getHours()) / 12;

    setRotation(hourhand, hour1);
    setRotation(minutehand, minute);
    setRotation(secondhand, second);
}

function setRotation(ele, rotation){
    ele.style.setProperty('--rotation', rotation * 360)

}

setclock();