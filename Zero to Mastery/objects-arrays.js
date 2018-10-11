// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
/*{
    username: 'miguel',
    password: 'itsasecret'
}*/

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [{
    username: 'miguel',
    password: 'itsasecret'
}];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [{
        username: 'Michael',
        timeline: 'Enjoying'
    },
    {
        username: 'Miguel',
        timeline: 'Enjoying'
    },
    {
        username: 'Petro',
        timeline: 'Enjoying'
    }
]

// login credentials
let usernamePrompt = prompt('Qual seu username?')
let passwordPrompt = prompt('Insira sua senha')

// Verifica se a os dados inseridos estão corretos com a base de dados
// function signIn(user, pass) {
//     if (user === database[0].username &&
//         pass === database[0].password) {
//         console.log(newsfeed)
//     } else {
//         alert('Usuário ou senha errados.')
//     }
// }

// Utilizando arrow function
let signIn = (user, pass) => {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsfeed)
    } else {
        alert('Usuário ou senha errados.')
    }
}

signIn(usernamePrompt, passwordPrompt)