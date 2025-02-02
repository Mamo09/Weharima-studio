import React from 'react';
import ContactUs from '../components/contactus';
import Iframe from '../components/iframe';


const ContactPage: React.FC = () => {
  return (
    <div className='bg-[#fbf9f3]'>

      <ContactUs/>
      <Iframe/>
      
    </div>
  );
};

export default ContactPage;