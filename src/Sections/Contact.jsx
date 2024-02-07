import React, { useState } from 'react';
import Heading from '../components/Heading';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import {ToastContainer, toast} from "react-toastify"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';






function Contact() {

  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true)

    emailjs
      .send(
        'service_k9gvekn',
        'template_b7fsnly',
        { ...message },
        'vMuEGIiT3GcaIzOWR'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          toast.success('Message sent');
          setSending(false)
            
          // Handle success response as needed
        },
        (error) => {
          console.error('Error sending email:', error);
          toast.error('Error sending message');
          setSending(false)
          // Handle error response as needed 
        }
      );


  };


  return (
    <section className=" text-white py-8 md:py-16 relative" id='contact'>
      <div className="container mx-auto w-[90%] md:w-8/12 ">

        <Heading name={'CONTACT ME!'} heading_desc={'Connect With Me'}/>

        <div className="w-[100%]">

          <div className='w-full'>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 text-sm md:text-base'>
              <div className='w-full flex-col md:flex-row flex md:gap-4'>
              <div className="w-full mb-4">
                {/* <label htmlFor="name" className="block text-white text-lg font-medium">
                  Name
                </label> */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border-b border-primary bg-transparent text-white py-2 focus:outline-none"
                  required
                  onChange={(e) => setMessage({ ...message, name: e.target.value})}
                />
              </div>

              <div className="w-full mb-4">
                {/* <label htmlFor="email" className="block text-white text-lg font-medium">
                  Email
                </label> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full  border-b border-primary bg-transparent  text-white py-2 focus:outline-none"
                  required
                  onChange={(e) => setMessage({ ...message, email: e.target.value})}
                />
              </div>
              </div>

              <div className="mb-4">
                {/* <label htmlFor="message" className="block text-white text-lg font-medium">
                  Message
                </label> */}
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="1"
                  className="w-full resize-none border-b border-primary bg-transparent text-white py-2 focus:outline-none"
                  required
                  onChange={(e) => setMessage({ ...message, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className=" bg-[#58585897]  w-full text-base text-primary py-3 px-3 md:py-3 md:px-4 rounded hover:bg-accent2 transition duration-300"
              >
                { sending ? (
                  <div>
<AiOutlineLoading3Quarters className='animate-spin inline-block mr-3 md:mr-4 w-5 h-5 md:w-6 md:h-6'/>
                  sending...
                  </div>
                ) : (
                  <div>
                <FiSend className="inline-block mr-3 md:mr-4 w-5 h-5 md:w-6 md:h-6" />
                Send Message
                </div>
                )
}
              </button>
            </form>
          </div>


        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;