function humanReadable(seconds) {

    let hours = Math.floor(seconds / 3600)
    let min = Math.min(Math.floor((seconds - hours * 3600) / 60), 59)
    let leftSec = Math.min(Math.floor(seconds - min * 60 - hours * 3600), 59)

    let result = hours.toString().padStart(2, '0');
    result += ':' + min.toString().padStart(2, '0');
    result += ':' + leftSec.toString().padStart(2, '0');
    return result;
}

console.log(humanReadable(86399));