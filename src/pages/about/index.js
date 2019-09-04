/**
 * Authors:    Sourav Kumar Nanda @souravkumarnanda4@gmail.com
 * Created:    10.08.2019
 * Purpose:    I understand the importance of comment lines in big projects. While setting up a new function, I will try to write
 *             some inline comments, descriptive block comments etc. to briefly explain how things work. 

 **/

import React from "react";
import ContentSection from "./../../components/ContentSection";
import StatsSection from "./../../components/StatsSection";
import TeamBiosSection from "./../../components/TeamBiosSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        title="One platform that does it all..."
        subtitle="Hire Freelancer, Manage projects, Track each 
        member’s progress, monitor project health, 
        assign tasks, set deadlines, Easily transfer Assets, 
        talk to team members, weekly Scrum Reports, 
        maintain transparency, organize feedbacks and 
        record actions to take. All in one place..."
      />
      <TeamBiosSection
        color="white"
        size="medium"
        title="Meet the Team"
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

export default AboutPage;
