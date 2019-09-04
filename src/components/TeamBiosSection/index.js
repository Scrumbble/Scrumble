import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import TeamBios from "./../TeamBios";
import "./styles.scss";

function TeamBiosSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <TeamBios
          people={[
            {
              avatar:
                "https://res.cloudinary.com/catchsahil/image/upload/v1566744094/avatar_g4yrbn.png",
              name: "Sourav Kumar Nanda",
              role: "Prime Mover - Tech",
              bio: "Hi, I'm Sourav Kumar Nanda. And this is my awesome bio.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar:
                "https://res.cloudinary.com/catchsahil/image/upload/v1566744094/avatar_g4yrbn.png",
              name: "Sambit Rath",
              role: "Prime Mover - Operations",
              bio: "Hi, I'm Sambit Rath. And this is my awesome bio",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TeamBiosSection;
