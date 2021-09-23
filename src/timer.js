export function getTimeRemainingMS(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    return t
}

export function getTimeForRender(time) {
    let seconds = Math.floor((Number(time) / 1000) % 60);
    let minutes = Math.floor((Number(time) / 1000 / 60) % 60);
    let hours = Math.floor((Number(time) / (1000 * 60 * 60)) % 24);
    let days = Math.floor(Number(time) / (1000 * 60 * 60 * 24));

    return `${days} дней, ${hours}:${minutes}:${seconds}`
}
