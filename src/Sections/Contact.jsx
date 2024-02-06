import React from 'react';
import Heading from '../components/Heading';


function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section className=" text-white py-16 relative" id='contact'>
      <div className="container mx-auto w-8/12 ">
        {/* <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2> */}


        <Heading name={'CONTACT ME!'} heading_desc={'Connect With Me'}/>

        <div className="w-[80%]">

          <div className='w-full'>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2'>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white text-xl font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-neutral-800 text-white p-4 focus:outline-none rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-white text-xl font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-neutral-800  text-white p-4 rounded-lg focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-white text-xl font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full resize-none bg-neutral-800 text-white p-4 rounded-lg focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className=" text-primary py-2 px-4 rounded hover:bg-accent2 transition duration-300"
              >
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
