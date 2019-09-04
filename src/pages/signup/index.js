/**
/**
 * Authors:    Sourav Kumar Nanda @souravkumarnanda4@gmail.com
 * Created:    10.08.2019
 * Purpose:    I understand the importance of comment lines in big projects. While setting up a new function, I will try to write
 *             some inline comments, descriptive block comments etc. to briefly explain how things work. 

 **/

import React from "react";
import SignUpSection from "./../../components/SignUpSection";
import "./styles.scss";

function SignupPage(props) {
  return (
    <SignUpSection
      color="white"
      size="large"
      title="Get yourself an account"
      subtitle=""
      buttonText="Sign up"
    />
  );
}

export default SignupPage;
