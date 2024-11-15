import React, { FC } from "react";
import { Titleprops } from "./type";
import { Container, HrDiv } from "./style";
import Image from "next/image";
import IamgeUrl from "@/assets/images/ZikZak.png"

const Title: FC<Titleprops> = ({heading,title, description,alignItem, marginRight, hr1Display, justifyContent}) => {
  return (
    <Container style={{alignItems:`${alignItem}` }}>
      <HrDiv style={{ justifyContent:`${justifyContent}`}}>
        <hr style={{display:`${hr1Display}`}}></hr>
        <h3>{heading}</h3>
        <hr></hr>
      </HrDiv>
      <h1>{title}</h1>
      <Image src={IamgeUrl} alt="ZikZak" className="img"/>
      <p style={{marginRight:`${marginRight}`}}>
        {description}
      </p>
    </Container>
  );
};

export default Title;
