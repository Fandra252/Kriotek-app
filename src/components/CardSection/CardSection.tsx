import React from "react";
import Card from "../common/Card";
import { CardContainer, Container, TitleContainer } from "./style";
import Title from "../common/Title/Title";
import { TbDeviceMobileStar } from "react-icons/tb";
import { GiHumanTarget } from "react-icons/gi";
import { MdOutlineScreenshotMonitor } from "react-icons/md";

const CardSection  = () => {
  return (
    <Container>
      <TitleContainer>
        <Title
          justifyContent="center"
          alignItem="center"
          heading="SERVICES"
          title="Most experienced services"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
  deleniti eaque quis culpa harum suscipit dicta rem deserunt ipsam ea?
  Natus sed dignissimos ea."
        />
      </TitleContainer>
      <CardContainer>
        <Card
          icon={<MdOutlineScreenshotMonitor style={{ width: "70px", height: "70px" }} />}
          title="Web Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          deleniti eaque quis culpa harum suscipit dicta rem deserunt ipsam ea?
          Natus sed dignissimos ea."
        />
        <Card
          icon={<GiHumanTarget style={{ width: "70px", height: "70px" }} />}
          title="AI Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        deleniti eaque quis culpa harum suscipit dicta rem deserunt ipsam ea?
        Natus sed dignissimos ea."
        />
        <Card
          icon={<TbDeviceMobileStar style={{ width: "70px", height: "70px" }} />}
          title="Mobile App Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
  deleniti eaque quis culpa harum suscipit dicta rem deserunt ipsam ea?
  Natus sed dignissimos ea."
        />
      </CardContainer>
    </Container>
  );
};

export default CardSection;
