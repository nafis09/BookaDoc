import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
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
                text: "Message sent Successfully",
                icon: "success"
            });
            event.target.reset();
        }
    };
    return (
        <section id="contact" className='min-h-screen items-center bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative'>
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-2 gap-8'>
                    {/* contact form */}
                    <div className='bg-white rounded-lg shadow-md p-8'>
                        <h2 className='text-3xl items-center justify center text-gray-800 font bold mb-8'>Contact Us</h2>
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
                                <label className='block text-gray-800 mb-2'>Write Message</label>
                                <textarea
                                    name="message"
                                    required
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                            </div>
                            <button type='submit'
                                className='w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition'>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* contact infor */}
                    <div className='bg-white text-gray-800 rounded-lg shadow-md p-8'>
                        <h2 className='text-3xl font-bold mb-8'>Hospital Information</h2>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <MapPin className='text-blue-600 mr-4' size={32}/>
                                <p className='text-gray-800'>45/A Dhanmondi, Road No 7, Dhaka 1205, Bangladesh</p>
                            </div>
                            <div className='flex items-center'>
                                <Phone className='text-blue-600 mr-4' size={32}/>
                                <p className='text-gray-800'>(+880) 1869021281</p>
                            </div>
                            <div className='flex items-center'>
                                <Mail className='text-blue-600 mr-4' size={32}/>
                                <p className='text-gray-800'>bookadoc25@gmail.com</p>
                            </div>
                        </div>
                        {/* Map Placeholder */}
                        <div className='mt-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg overflow-hidden'>
                            <iframe
                            title="Google Maps Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9633197348375!2d90.3783973149825!3d23.78602658457359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71cacc7b39f%3A0x46314f062ad77d3e!2sPopular%20Diagnostic%20Center%20Dhanmondi!5e0!3m2!1sen!2sbd!4v1658136296789!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{border:0}}
                            allowFullScreen=""
                            loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact