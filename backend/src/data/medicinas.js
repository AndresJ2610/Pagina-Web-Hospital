const medicinas = [
    {
        id: 123,
        nombre: 'Paracetamol',
        descripcion: 'Medicamento para el dolor',
        precio: 10,
        cantidad: 100,
    },
    {
        id: 213,
        nombre: 'Gelocatil',
        descripcion: 'Descongestivo nasal',
        precio: 75.5,
        cantidad: 100,
    }
]

const getMedicinas = () => {
    return medicinas
}

export { getMedicinas }