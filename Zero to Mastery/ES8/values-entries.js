// Object.entries
// Object.values
// Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
})

Object.values(obj).forEach(value => {
    console.log(value)
})

Object.entries(obj).forEach(value => {
    console.log(value)
})

Object.entries(obj).map(value => {
    // we want to return the second valor of the array [1],
    // that contains the username and + it with the value [0]
    // that contains usernameX, but replace the username string
    // with an empty one
    return value[1] + value[0].replace('username', '')
})