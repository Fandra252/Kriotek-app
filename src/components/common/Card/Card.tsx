import React, { FC } from 'react';
import { CardProps } from './type';
import { CardContainer, CardContentDiv, CardLogoDiv } from './style';

const Card: FC<CardProps> = ({title, description, icon}) => {
  return (
    <CardContainer>
        <CardLogoDiv className='logo'>
          {icon}
        </CardLogoDiv>
        <CardContentDiv>
            <h3>{title}</h3>
            <p>{description}</p>
        </CardContentDiv>
    </CardContainer>
  )
}

export default Card