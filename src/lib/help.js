export const timestampToDate = (n, type) => {
    let date = new Date(n)

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let houts = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    
    if (month / 10 < 1) month = '0' + month
    if (day / 10 < 1) day = '0' + day

    switch (type) {
        case 'xxxx-xx-xx':
            return `${year}-${month}-${day}`

        default:
            return `${year}-${month}-${day}`
    }
}