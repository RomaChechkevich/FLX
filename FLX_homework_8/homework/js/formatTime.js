function formatTime(time){
    let oneDayMinutes = 24 * 60;
    let modulo = time % oneDayMinutes;
    
    let countDays = Math.floor(time / oneDayMinutes);
    let countHours = Math.floor(modulo / 60);
    let countMinutes = Math.floor(modulo % 60);
    return `${countDays} day(s) ${countHours} hour(s) ${countMinutes} minute(s).`;
}
formatTime(120);
formatTime(59);
formatTime(3601);