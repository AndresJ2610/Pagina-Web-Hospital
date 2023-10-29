const users = [
    //doctores
    {
        id: 1000,
        firstname : 'Rodrigo',
        lastname: 'Cabiar',
        username: 'rodri',
        birthdate: '1980-08-12',
        genre: 'M',
        password: 'password1',
        phone: '12345678',
        role: 'doctor'
    },
    {
        id: 2000,
        firstname : 'Julian',
        lastname: 'Yudo',
        username: 'judo',
        birthdate: '1982-02-18',
        genre: 'M',
        password: 'password3',
        phone: '12345675',
        role: 'doctor'
    },
    //enfermera
    {
        id: 3000,
        firstname: 'Maya',
        lastname: 'De Leon',
        username: 'mayaleon',
        birthdate: '1998-01-05',
        genre: 'F',
        password: 'password4',
        phone: '87654325',
        role: 'nurse'
    },

    {
        id: 4000,
        firstname: 'Karla',
        lastname: 'De Leon',
        username: 'karlaleon',
        birthdate: '1988-01-05',
        genre: 'F',
        password: 'password4',
        phone: '87654325',
        role: 'nurse'
    },
    //paciente quemado
    {
        id: 12,
        firstname: 'Leonardo',
        lastname: 'Romulo',
        username: 'romuelo',
        birthdate: '2000-12-1',
        genre: 'M',
        password: 'contrasena1',
        phone: '88552244',
        role: 'patient'
    }
]

const findUser = (username, password) => {
    return users.find(user => user.username === username && user.password === password)
}

const agregarUser = (user) => {
    users.push(user)
}

const getPatiens = () => {
    return users.filter(user => user.role === 'patient')
}

const findUserId = id => {
    return users.find(user => user.id === id)
}

export { users, findUser, getPatiens, agregarUser, findUserId}