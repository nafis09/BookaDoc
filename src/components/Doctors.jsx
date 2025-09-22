import React from 'react'

const Doctors = () => {
    const doctorsList = [
        {
            name: "Dr. Rakib Ahmed",
            specialization: "Cardiology",
            availability: "Mon-Wed, 9am-5pm"
        },
        {
            name: "Dr. Kamrul Hasan",
            specialization: "Orthopedics",
            availability: "Thu-Sat, 10am-6pm"
        },
        {
            name: "Dr. Shilpa Roy",
            specialization: "Pediatrics",
            availability: "Tue-Fri, 8am-4pm"
        },
        {
            name: "Dr. Nusrat Jahan",
            specialization: "Gynecology",
            availability: "Mon-Thu, 10am-5pm"
        },
        {
            name: "Dr. Tanvir Alam",
            specialization: "Dermatology",
            availability: "Wed-Sat, 11am-7pm"
        },
        {
            name: "Dr. Fahim Reza",
            specialization: "Neurology",
            availability: "Mon, Wed, Fri – 9am-3pm"
        },
        {
            name: "Dr. Ayesha Siddiqua",
            specialization: "Psychiatry",
            availability: "Tue-Thu, 10am-4pm"
        },
        {
            name: "Dr. Zahirul Islam",
            specialization: "ENT",
            availability: "Sat-Mon, 9am-1pm"
        },
        {
            name: "Dr. Mahbuba Haque",
            specialization: "General Medicine",
            availability: "Everyday, 8am-2pm"
        }
    ]



    return (
        <section id="doctor" className='min-h-screen bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative'>
            <div className='container mx-auto px-4'>
                <h1 className='text-4xl text-gray-800 font-bold text-center mb-12'>Our Doctors</h1>
                <div className='grid md:grid-cols-3 gap-8'>
                    {doctorsList.map((doctor, index) => (
                        <div key={index} className='bg-white rounded-lg shadow-md p-6 text-center'>
                            
                            <h3 className='text-xl text-gray-800 font-semibold'>{doctor.name}</h3>
                            <p className='text-gray-600 mb-2'>{doctor.specialization}</p>
                            <p className='text-sm text-gray-500 mb-4'>Availability: {doctor.availability}</p>
                            <a href='#appointment'
                                className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700/20 transition'>
                                Book Appointment
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Doctors