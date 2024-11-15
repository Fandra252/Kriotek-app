import React from "react";
import Title from "../common/Title/Title";
import Image from "next/image";
import ImageUrl from "@/assets/images/AboutUs.jpg"
import { ButtonDiv, Container, ImgDiv, SubConatiner, TextDiv } from "./style";
import { Button2 } from "../common/Button";

const AboutUs = () => {
  return (
    <Container>
      <SubConatiner>
        <ImgDiv>
          <Image
            className="img"
            src={ImageUrl}
            alt="Kriotek Logo"
            priority
          />
        </ImgDiv>
        <TextDiv>
          <Title
          // justifyContent="left"
            // marginRight="80px"
            hr1Display="none"
            alignItem="start"
            heading="ABOUT US"
            title="Creative & Modern agency"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti eaque quis culpa harum suscipit dicta rem deserunt ipsam ea? Natus sed dignissimos ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti eaque quis culpa harum suscipit dicta rem deserunt ipsam ea? Natus sed dignissimos ea. Natus sed dignissimos ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti eaque quis culpa harum suscipit dicta rem deserunt ipsam ea? Natus sed dignissimos ea."
          />
        <ButtonDiv>
          <Button2>Explore More</Button2>
        </ButtonDiv>
        </TextDiv>
      </SubConatiner>
    </Container>
  );
};

export default AboutUs;
