import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const ProjectDiv = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
`;

export const HrDiv = styled.div`
  width: 70%;
  margin: 3rem 0;
  hr{
    border-color: #ffffff;
  }
`;
