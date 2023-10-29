import { findUserId } from "./users.js"

const citas = [
    {
        id: 1,
        patientId: 12,
        doctorId: null,
        date: '2023-12-04',
        time: '9:50',
        motivo: 'Dolor de espalda'
    },
    {
        id: 2,
        patientId: 4,
        doctorId: null,
        date: '2023-11-08',
        time: '15:23',
        motivo: 'gripe'
    }
]

const findPendingAppointments = () => {
    const pendingAppointments = citas.filter(appointment => appointment.doctorId === null)
    return pendingAppointments.map(appointment => {
        const patient = findUserId(appointment.patientId)
        return {
            ...appointment,
            patient
        }
    })
}

export {
    findPendingAppointments
}