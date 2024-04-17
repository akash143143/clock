const showTime = () => {
    let curTime = new Date().toLocaleTimeString();
    document.getElementById('clock').innerText = curTime;
}

showTime();

const intervalId = setInterval(() => {
    showTime();
}, 1000);


// to stop the clock
// setTimeout(() => clearInterval(intervalId), 5000);