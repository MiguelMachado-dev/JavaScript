var database = [{
        username: 'miguel',
        password: 'itsasecret'
    },
    {
        username: 'john',
        password: '123'
    },
    {
        username: 'stwen',
        password: '777'
    }
];

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
];

// Verifica se o usuário está no banco de dados
function isValid(username, password) {
    for (i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}

// login credentials
let usernamePrompt = prompt('Qual seu username?')
let passwordPrompt = prompt('Insira sua senha')

// Verifica se a os dados inseridos estão corretos com a base de dados
let signIn = (username, password) => {
    if (isValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert('Login ou senha inválidos');
    }
}

signIn(usernamePrompt, passwordPrompt)