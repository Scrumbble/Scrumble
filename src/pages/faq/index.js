/**
 * Authors:    Sourav Kumar Nanda @souravkumarnanda4@gmail.com
 * Created:    10.08.2019
 * Purpose:    I understand the importance of comment lines in big projects. While setting up a new function, I will try to write
 *             some inline comments, descriptive block comments etc. to briefly explain how things work. 

 **/

import React from "react";
import FaqSection from "./../../components/FaqSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function FaqPage(props) {
  const router = useRouter();

  return (
    <>
      <FaqSection
        color="white"
        size="medium"
        title="Frequently Asked Questions"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default FaqPage;
