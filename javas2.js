function displayCurrentDayAndTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
    const now = new Date();
    
    
    const day = daysOfWeek[now.getDay()];

    
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    
    let period = hours >= 12 ? 'PM' : 'AM';
    
    
    if (hours === 0) {
        hours = 12;  // Полночь
    } else if (hours === 12) {
        period = "PM"; 
    } else if (hours > 12) {
        hours -= 12;
    }

    
    if (now.getHours() === 0) {
        period = "Midnight";
    } else if (now.getHours() === 12) {
        period = "Noon";
    }

    
    const currentTime = `${hours} ${period} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

    console.log(`Today is : ${day}.`);
    console.log(`Current time is : ${currentTime}`);
}


displayCurrentDayAndTime();
