'use client'
import { useEffect, useState } from "react"

function PacientesPage () {
    const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        const fetchPacientes = async () => {
            const response = await fetch('http://localhost:4000/patients')

            if (response.ok) {
                const data = await response.json()
                setPacientes(data)
            }
        }

        fetchPacientes()
    }, [])

    return (
        // va a tener el mismo navbar
        <div>
            <h1>Pacientes en el sistema</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Apellido
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Telefono
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            {pacientes.map((paciente) => (
                            <tr key={paciente.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {paciente.id}
                                </th>
                                <td className="px-6 py-4">
                                    {paciente.firstname}
                                </td>
                                <td className="px-6 py-4">
                                    {paciente.lastname}
                                </td>
                                <td className="px-6 py-4">
                                    {paciente.phone}
                                </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default PacientesPage