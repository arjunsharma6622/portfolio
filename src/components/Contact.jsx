import React from 'react';
import { LinearGradient } from 'react-text-gradients'


function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section className="bg-primary text-white py-16 relative">
      <div className="container mx-auto w-8/12 ">
        {/* <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2> */}



          

        <div className='text-center mb-6 flex justify-items-start items-center gap-3'>
        <img src="./images/folder.svg" alt="" className='h-8 w-8'/>            
        <LinearGradient
          gradient={['to left', '#101010, #808080']}
          className="text-6xl font-black"
        >
          /CONTACT ME!
        </LinearGradient>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p>Email: example@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-neutral-800 text-white p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-neutral-800 text-white p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-neutral-800 text-white p-2 rounded"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-accent1 text-primary py-2 px-4 rounded hover:bg-accent2 transition duration-300"
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
