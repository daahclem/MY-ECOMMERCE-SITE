const countdown = () => {
    const countDate = new Date("Jan 4, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % day) / minute);
    const textSecond = Math.floor((gap % day) / second);

    document.querySelector(".container-hour").innerHTML = textHour;
    document.querySelector(".container-minute").innerHTML = textMinute;
    document.querySelector(".container-Second").innerHTML = textSecond;
}

setInterval(countdown, 1000);