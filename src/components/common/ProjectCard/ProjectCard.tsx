import React, { FC } from "react";
import { ProjectCardProps } from "./type";
import { CardContainer, InnerDiv1, InnerDiv2 } from "./style";
import { Button3 } from "../Button/Button";
import "./main.css";

const ProjectCard: FC<ProjectCardProps> = ({ title, btn1Text, btn2Text }) => {
  return (
    <CardContainer
      className="CardContainer"
    >
      <InnerDiv2 style={{display:""}}>
        <Button3  >{btn1Text}</Button3>
      </InnerDiv2>
      <InnerDiv1>
        <Button3>{btn2Text}</Button3>
        <h1>{title}</h1>
      </InnerDiv1>
      
    </CardContainer>
  );
};

export default ProjectCard;
