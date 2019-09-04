/**
 * Authors:    Sourav Kumar Nanda @souravkumarnanda4@gmail.com
 * Created:    10.08.2019
 * Purpose:    I understand the importance of comment lines in big projects. While setting up a new function, I will try to write
 *             some inline comments, descriptive block comments etc. to briefly explain how things work. 

 **/

import React from "react";
import ContactSection from "./../../components/ContactSection";
import "./styles.scss";

function ContactPage(props) {
  return (
    <ContactSection
      color="white"
      size="medium"
      title="Contact Us"
      subtitle=""
      showNameField={true}
      buttonText="Send message"
    />
  );
}

export default ContactPage;
