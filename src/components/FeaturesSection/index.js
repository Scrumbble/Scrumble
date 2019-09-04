import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: "Post your Project",
                body:
                  "Have a project? Looking for a project manager? Need more transperency? Want to checck the overall progress? Scrumble got you covered.",
                image:
                  "https://res.cloudinary.com/catchsahil/image/upload/v1566759772/postproject_gviqn7.svg"
              },
              {
                title: "Track Progress",
                body:
                  "Tracking progress have never been easier. A single source of truth has always been the challenge. Progress of each member?  Are there any backlogs? Scrumble makes it all seamless.",
                image:
                  "https://res.cloudinary.com/catchsahil/image/upload/v1566759772/progress_znidke.svg"
              },
              {
                title: "Create and Assign Tasks",
                body:
                  "Create milstones, add tasks for each milstones, set deadline, assign them to each team member. Control who does what and make them accountable.",
                image:
                  "https://res.cloudinary.com/catchsahil/image/upload/v1566759773/scrumboard_c8i6wd.svg"
              },
              {
                title: "Manage Scrum Reports",
                body:
                  "Proper monitoring of a project and correct reporting of the progress are key to success. Be clear on progress, risks, mitigation plans and any issues on the project. on-tap reports you can use to manage your team effectively.",
                image:
                  "https://res.cloudinary.com/catchsahil/image/upload/v1566759772/scrumreport_jswatu.svg"
              },
              {
                title: "Co-working Space Matching",
                body:
                  "Gone are the days when freelancers used to work from home. A collaboarative space is what they need. In our platform once you get a project, we allocate you to the near by co-working space operated by us. Isn’t it cool?",
                image:
                  "https://res.cloudinary.com/catchsahil/image/upload/v1566759001/coworking_ghcf3f.svg"
              },
              {
                title: "Effective Communication",
                body:
                  "Teams get stuck in never-ending group chats. Information gets buried. Scrumble organizes discussions into threads that stay on topic and in context. Information remains neatly structured and easy to find.",
                image:
                  "https://res.cloudinary.com/catchsahil/image/upload/v1566759772/chat_gssawz.svg"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
