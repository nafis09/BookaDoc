import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    reason: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "6f8cae79-a2e2-49b3-ba3f-ac64bde2b08c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success",
        text: "Appointment Booked Successfully",
        icon: "success"
      });
      event.target.reset();
    }
  };

  return (
    <section id="appointment" className='min-h-screen bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative'>
      <div className='container mx-auto px-4'>
        <div className='max-w-md mx-auto bg-white rounded-lg shadow-md p-8'>
          <h2 className='text-3xl text-gray-800 font-bold text-center mb-8'>Book Appointment</h2>
          <form onSubmit={onSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-800 mb-2'>Full Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md bg-white text-black' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-800 mb-2'>Email Address</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md bg-white text-black' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-800 mb-2'>Phone No</label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md bg-white text-black' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-800 mb-2'>Select Doctor</label>
              <select
                name="doctor"
                required
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md bg-white text-black'>
                   <option value="">Select a Doctor</option>
                   <option value="Dr. Rakib Ahmed">Dr. Rakib Ahmed – Cardiology</option>
                   <option value="Dr. Kamrul Hasan">Dr. Kamrul Hasan – Orthopedics</option>
                   <option value="Dr. Shilpa Roy">Dr. Shilpa Roy – Pediatrics</option>
                   <option value="Dr. Nusrat Jahan">Dr. Nusrat Jahan – Gynecology</option>
                   <option value="Dr. Tanvir Alam">Dr. Tanvir Alam – Dermatology</option>
                   <option value="Dr. Fahim Reza">Dr. Fahim Reza – Neurology</option>
                   <option value="Dr. Ayesha Siddiqua">Dr. Ayesha Siddiqua – Psychiatry</option>
                   <option value="Dr. Zahirul Islam">Dr. Zahirul Islam – ENT</option>
                   <option value="Dr. Mahbuba Haque">Dr. Mahbuba Haque – General Medicine</option>
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-800 mb-2'>Select Date of Appointment</label>
              <input
                type="date"
                name="date"
                required
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md bg-white text-black' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-800 mb-2'>Write Reason for Visit</label>
              <textarea
                name="reason"
                required
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md bg-white text-black' />
            </div>
            <button type='submit'
              className='w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition'>
              Confirm Appointment
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Appointment