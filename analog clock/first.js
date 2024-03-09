function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    const hourDegrees = (hour % 12) * 30 + (minute / 60) * 30;
    const minuteDegrees = (minute / 60) * 360;
    const secondDegrees = (second / 60) * 360;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to avoid delay
updateClock();
