'use client'
import { useEffect, useState } from "react"

function NursePage() {
    const [firstname, setFirstName] = useState("")
    const [citasPendientes, setCitasPendientes] = useState([])

    useEffect(() => {
        const getPendingAppointments = async() => {
            try {
                const response = await fetch('http://localhost:4000/appointments/pendings')
                if (response.ok) {
                    const pendingAppointments = await response.json()
                }
            } catch (error) {
                alert('Hubo un error al obtener las citas pendientes')
                console.error(error)
            }
        } 

        getPendingAppointments()
    }, [])

    useEffect(() => {
        const { firstname } = JSON.parse(localStorage.getItem('user'))
        setFirstName(firstname)
    }, [])

    return (
        <div>
            <div className="flex flex-row items-center justify-center">
                <h1 className="text-2xl">Bienvenida enfermera: {firstname} </h1>
            </div>
            <div className="flex flex-row items-center justify-center">
                <h1 className="text-2xl">Citas Pendientes</h1>
            </div>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre del Paciente
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora de la cita
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Motivo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Doctor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span class="sr-only">Aceptar</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span class="sr-only">Rechazar</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {citasPendientes.map((citaPendiente) => (
                            <tr key={citaPendiente.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {citaPendiente.firstname}
                                </th>
                                <td className="px-6 py-4">
                                    {citaPendiente.date}
                                </td>
                                <td className="px-6 py-4">
                                    {citaPendiente.time}
                                </td>
                                <td className="px-6 py-4">
                                    {citaPendiente.motivo}
                                </td>
                                <td className="px-6 py-4">
                                    Doctor
                                </td>
                                <td className="px-6 py-4">
                                    <button>Aceptar</button>
                                </td>
                                <td className="px-6 py-4">
                                    <button>Rechazar</button>
                                </td>
                            </tr>
                            ))} 
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default NursePage