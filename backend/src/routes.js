import express from 'express'
import { findUser, getPatiens } from './data/users.js'
import { getMedicinas } from './data/medicinas.js'
import { agregarCompraDeMedicina } from './data/recetas.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hola')
})

router.post('/login', (req,res) => {
    const { username, password } = req.body

    /**if (username === 'admin' && password === 'admin') {
        res.send('Login correcto')
    } else {
        res.status(401).send('Login incorrecto')
    }*/

    const user = findUser(username, password)

    if(user) {
        res.json({message: 'Usuaro logueado con éxito', user})
    } else {
        res.status(401).json({ message: 'Usuario o contraseña incorrectos'})
    }
})

router.post('/register', (req, res) => {
    const user = req.body
    user.push(user)
    res.json({ message: 'Usuario agregado exitosamente' })
})

router.get('/patients', (req, res) => {
    const patients = getPatiens()
    res.json(patients)
})

router.get('/medicinas', (req, res) => {
    const medicinas = getMedicinas()
    res.json(medicinas)
})

router.post('/compraMedicina', (req, res) => {
    const { idMedicina, cantidad, idPaciente } = req.body

    agregarCompraDeMedicina({
        idMedicina,
        cantidad,
        idPaciente
    })

    res.json({ message: 'Compra de medicina exitosa' })
})

router.get('/appointments/pending', (req, res) => {
    res.status(200).send(pendingAppointments)
})

export default router