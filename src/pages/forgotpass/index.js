/**
 * Authors:    Sourav Kumar Nanda @souravkumarnanda4@gmail.com
 * Created:    10.08.2019
 * Purpose:    I understand the importance of comment lines in big projects. While setting up a new function, I will try to write
 *             some inline comments, descriptive block comments etc. to briefly explain how things work. 

 **/

import React from "react";
import ForgotPassSection from "./../../components/ForgotPassSection";
import "./styles.scss";

function ForgotpassPage(props) {
  return (
    <ForgotPassSection
      color="white"
      size="large"
      title="Get a new password"
      subtitle=""
      buttonText="Reset password"
    />
  );
}

export default ForgotpassPage;
