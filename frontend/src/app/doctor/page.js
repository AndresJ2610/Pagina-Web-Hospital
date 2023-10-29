'use client'


function DoctorPage() {

    const { firstname } = JSON.parse(localStorage.getItem('user'))

    return (
        
        <div>
            <h1>Bienvenido doctor: {firstname}</h1>
        </div>

    )
}

export default DoctorPage