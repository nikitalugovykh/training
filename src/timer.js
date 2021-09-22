export function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
// надо подумать 
    const timer = setTimeout(function run() {
        getTimeRemaining(t)
        setTimeout(run,1000)
    },1000)

    if (t <= 0) {
        clearTimeout(timer)
    }
    return `${days} дней, ${hours}:${minutes}:${seconds}`
}
