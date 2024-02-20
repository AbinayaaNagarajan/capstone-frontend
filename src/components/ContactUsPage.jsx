// // ContactUsPage.js

// import React, { useState } from 'react';
// import Axios from 'axios';
// import Sidebar from './Sidebar';

// const ContactUsPage = () => {
//   const [contactFormData, setContactFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setContactFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send a POST request to save contact form data
//     Axios.post('http://localhost:3000/contact/saveContact', contactFormData)
//       .then((response) => {
//         console.log(response.data); // Handle success, e.g., show a success message
//       })
//       .catch((error) => {
//         console.error('Error saving contact form data:', error);
//       });
//   };

//   return (
//     <div className="contact-us-layout">
//       {/* Sidebar Navigation */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="content contact-us-page">
//         <h2>Contact Us</h2>

//         {/* Contact Us Form */}
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={contactFormData.name}
//             onChange={handleInputChange}
//             required
//           />

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={contactFormData.email}
//             onChange={handleInputChange}
//             required
//           />

//           <label htmlFor="mobile">Mobile:</label>
//           <input
//             type="text"
//             id="mobile"
//             name="mobile"
//             value={contactFormData.mobile}
//             onChange={handleInputChange}
//             required
//           />

//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={contactFormData.message}
//             onChange={handleInputChange}
//             required
//           ></textarea>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUsPage;


import React, { useState } from 'react';
import Axios from 'axios';
import Sidebar from './Sidebar';

const ContactUsPage = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to save contact form data
    Axios.post('http://localhost:3000/contact/saveContact', contactFormData)
      .then((response) => {
        console.log(response.data); // Handle success, e.g., show a success message
        setSubmitted(true); // Set the submitted state to true
      })
      .catch((error) => {
        console.error('Error saving contact form data:', error);
      });
  };

  return (
    <div className="contact-us-layout">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <div className="content contact-us-page">
        <h2>Contact Us</h2>

        {submitted ? (
          <div className="thank-you-message">
            Thank you for contacting us! We will call you back soon.
          </div>
        ) : (
          // Contact Us Form
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactFormData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactFormData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={contactFormData.mobile}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={contactFormData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUsPage;
