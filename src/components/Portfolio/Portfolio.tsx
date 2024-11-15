import React from "react";
import Title from "../common/Title/Title";
import { Container, HrDiv, ProjectDiv, TitleContainer } from "./style";
import ProjectCard from "../common/ProjectCard/ProjectCard";
import { Button2} from "../common/Button/Button";

const Portfolio = () => {
  return (
    <Container>
      <TitleContainer>
        <Title
          justifyContent="center"
          alignItem="center"
          heading="portfolio"
          title="our recently completed projects"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
  deleniti eaque quis culpa harum suscipit dicta rem deserunt ipsam ea?
  Natus sed dignissimos ea."
        />
      </TitleContainer>
      <ProjectDiv>
        <ProjectCard
          title="Website"
          btn1Text="Made by Kriotek"
          btn2Text="Branding"
        />
        <ProjectCard
          title="Work Media"
          btn1Text="Made by Kriotek"
          btn2Text="Illustration"
        />
        <ProjectCard
          title="Dashboard"
          btn1Text="Made by Kriotek"
          btn2Text="Motion"
        />
        <ProjectCard
          title="Mobile App"
          btn1Text="Made by Kriotek"
          btn2Text="Motion"
        />
      </ProjectDiv>
      <HrDiv>
        <hr></hr>
      </HrDiv>
      <Button2>Explore More</Button2>
    </Container>
  );
};

export default Portfolio;
