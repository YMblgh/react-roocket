export default function hourAMPM(date) {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let ampm = hours <= 12 ? 'AM' : 'PM'
    hours = hours % 12

    return `${hours}:${minutes} ${ampm}`
}