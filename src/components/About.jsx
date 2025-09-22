import { Stethoscope, Brain, Baby, TestTube, AlarmClock, ClipboardList } from 'lucide-react'
import React from 'react'



const About = () => {
    return (

        <section id="about" className='min-h-screen bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative'>
            <div className='container mx-auto px-4'>
                {/* hero Section */}
                <div className='text-center py-20 flex flex-col items-center justify-center'>
                    <div className='animated-container'>
                        <h1 className='text-5xl font-bold text-blue-800 mb-6 animate-fade-in'>
                            Book Trusted Doctors. Fast. Simple. Secure.
                        </h1>
                        <p className='text-xl text-gray-600 mb-8 animate-fade-in delay-1'>
                            Skip the Wait. Book a Doc Today.
                        </p>
                    </div>

                    <a href='#appointment'
                        className='bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700/20 transition text-lg mt-4'>
                        Book Appointemnt
                    </a>
                </div>

                {/* Services section */}
                <section className='grid md:grid-cols-3 gap-6'>
                    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                        <ClipboardList className='mx-auto text-blue-600 mb-4' size={48} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>General Checkup</h3>
                        <p className='text-gray-600'>Comprehensive health evaluations</p>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                        <TestTube className='mx-auto text-blue-600 mb-4' size={48} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Diagnostic Tests</h3>
                         <p className='text-gray-600'>Blood tests, scans & lab reports with ease</p>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                        <Baby className='mx-auto text-blue-600 mb-4' size={48} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Childcare Services</h3>
                        <p className='text-gray-600'>Dedicated care for your little ones</p>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                         <Brain className='mx-auto text-blue-600 mb-4' size={48} />
                         <h3 className='text-xl font-semibold text-gray-800 mb-3'>Mental Wellness</h3>
                         <p className='text-gray-600'>Access therapists and psychiatrists</p>

                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                        <AlarmClock className='mx-auto text-blue-600 mb-4' size={48} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Urgent Medical Assistance</h3>
                        <p className='text-gray-600'>Access emergency services 24/7</p>
                    </div>
                </section>

{/* Testimonials Section */}
<section className='bg-white p-10 rounded-lg shadow-lg'>
  <h2 className='text-3xl font-bold text-center mb-10 text-gray-800'>Patient Testimonials</h2>
  <div className='grid md:grid-cols-2 gap-8'>

    {/* Testimonial 1 */}
    <div className='bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105'>
      <p className='italic text-gray-600 mb-4 text-lg'>
        The doctor's behavior and service were outstanding. I got my appointment within minutes.
      </p>
      <p className='font-semibold text-gray-800'>- Rahat Akbar</p>
    </div>

    {/* Testimonial 2 */}
    <div className='bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105'>
      <p className='italic text-gray-600 mb-4 text-lg'>
        It was so easy to consult with a doctor online. Saved my time and effort, especially during traffic.
      </p>
      <p className='font-semibold text-gray-800'>- Nitu Rahman</p>
    </div>

    {/* Testimonial 3 */}
    <div className='bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105'>
      <p className='italic text-gray-600 mb-4 text-lg'>
        Booking an appointment for my elderly father was very smooth. Excellent service and support.
      </p>
      <p className='font-semibold text-gray-800'>- Nasir Hossain</p>
    </div>

    {/* Testimonial 4 */}
    <div className='bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105'>
      <p className='italic text-gray-600 mb-4 text-lg'>
        Very professional doctors and the interface is easy to use. Highly recommend for quick appointments.
      </p>
      <p className='font-semibold text-gray-800'>- Farzana Akter</p>
    </div>

  </div>
</section>


            </div>
        </section>
    )
}

export default About