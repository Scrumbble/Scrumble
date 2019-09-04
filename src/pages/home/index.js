/**
 * Authors:    Sourav Kumar Nanda @souravkumarnanda4@gmail.com
 * Created:    10.08.2019
 * Purpose:    I understand the importance of comment lines in big projects. While setting up a new function, I will try to write
 *             some inline comments, descriptive block comments etc. to briefly explain how things work. 

 **/

import React from "react";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="primary"
        size="medium"
        title="One platform that does it all..."
        subtitle="Hire Freelancer, Manage projects, Track each 
        member’s progress, monitor project health, 
        assign tasks, set deadlines, Easily transfer Assets, 
        talk to team members, weekly Scrum Reports, 
        maintain transparency, organize feedbacks and 
        record actions to take. All in one place..."
        buttonText="Get Started"
        image="https://res.cloudinary.com/catchsahil/image/upload/v1566758574/mainbg_v6oqhz.svg"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="All the features you need to move faster"
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

export default HomePage;
