import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 3rem 0;
    transition: transform 0.3s ease,
     box-shadow 0.3s ease-in-out;
     @media screen and (max-width: 576px) {
      flex-wrap: wrap;
      margin: 0 4rem;
      gap: 40px;
     }
`;

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 6rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    padding: 3rem 0;
     }
`;

export const TitleContainer = styled.div`
 width: 40%;
 display: flex;
 justify-content: center;
 align-items: center;
 @media screen and (max-width: 576px) {
      width: 100%;
     }
`;
