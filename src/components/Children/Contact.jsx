/**
|--------------------------------------------------
| Stateless Contact component.
| Displays ContactUs and Map sub components.
|--------------------------------------------------
*/

import React from 'react';
import ContactUs from './Contact/ContactUs.jsx';
import Map from './Contact/Map.jsx';

const Contact = () => {
  return (
    <section className="section-contact row" id="section-contact">
    {/*Write code here */}
      <ContactUs />
      <Map />
    </section>
  );
}

export default Contact;