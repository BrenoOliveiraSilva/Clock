setInterval(() =>{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    // GETTING TIME
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // ADD ZERO BEFORE SINGLE DIGITS
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // PRINTING HOURS
    hours.innerHTML = h + ":";
    minutes.innerHTML = m + ":";
    seconds.innerHTML = s + " H";
})