export function getTimeRemainingMS(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    return t
}

export function getTimeForRender(time) {
    let seconds = String(Math.floor((Number(time) / 1000) % 60)).padStart(2, "0");
    let minutes = String(Math.floor((Number(time) / 1000 / 60) % 60)).padStart(2, "0");
    let hours = String(Math.floor((Number(time) / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    let days = Math.floor(Number(time) / (1000 * 60 * 60 * 24));

    return `${days === 0 ? '' : declOfNum(days, text_forms)} ${hours}:${minutes}:${seconds}`
}

const text_forms = ['день','дня','дней']

function declOfNum(n, text_forms) {  
    n = Math.abs(n) % 100; 
    const n1 = n % 10;
    if (n > 10 && n < 20) { return `${n} ${text_forms[2]}, ` }
    if (n1 > 1 && n1 < 5) { return `${n} ${text_forms[1]}, ` }
    if (n1 === 1) { return `${n} ${text_forms[0]}, ` }
    return `${n} ${text_forms[2]}, `
}
