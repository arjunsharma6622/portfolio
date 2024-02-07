import React, { useState } from 'react';
import Heading from '../components/Heading';
import { FiSend } from 'react-icons/fi';



function Contact() {

  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

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
                <FiSend className="inline-block mr-3 md:mr-4 w-5 h-5 md:w-6 md:h-6" />
                Send Message
              </button>
            </form>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Contact;






// import React from 'react';
// import Heading from '../components/Heading';

// function Contact() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

//   return (
//     <section className="text-white py-16 relative" id="contact">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-8/12">
//         <div>
//           <Heading name={'CONTACT ME!'} />
//           <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
//           <form onSubmit={handleSubmit}>
//             {/* Your form fields */}
//           </form>
//         </div>
//         <div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
