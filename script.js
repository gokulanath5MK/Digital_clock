
function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

if (hrs>12) {
    hrs = hrs -12
    ampm.innerText = 'PM'
}


    document.getElementById('hours').innerHTML = padZero(hrs);
    document.getElementById('mins').innerHTML = padZero(mins);
    document.getElementById('seconds').innerHTML = padZero(seconds)
}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime, 500)