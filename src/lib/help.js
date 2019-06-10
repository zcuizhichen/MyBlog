export const timestampToDate = (n, type) => {
    let date = new Date(n)

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if (month / 10 < 1) month = '0' + month
    if (day / 10 < 1) day = '0' + day
    if (hours / 10 < 1) hours = '0' + hours
    if (minutes / 10 < 1) minutes = '0' + minutes
    if (seconds / 10 < 1) seconds = '0' + seconds

    switch (type) {
        case 'xx-xx':
            return `${month}-${day}`

        case 'xxxx-xx-xx':
            return `${year}-${month}-${day}`

        case 'xxxx-xx-xx xx-xx':
            return `${year}-${month}-${day} ${hours}:${minutes}`

        default:
            return `${year}-${month}-${day}`
    }
}