import styled from "styled-components";

export const CardContainer = styled.div`
  width: 310px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.6rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 0px 6px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid black;
    .logo {
      background-color: black;
      color: ${({ theme }) => theme.colors.secondaryText};
    }
  }
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 270px;
  }
`;

export const CardLogoDiv = styled.div`
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid black;
  @media screen and (max-width: 576px) {
    width: 80px;
  height: 80px;
  }
`;
export const CardContentDiv = styled.div`
  width: 100%;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 500;
  }
  p {
    text-align: center;
    font-size: 0.9rem;
    margin-bottom: 0;
  }
  @media screen and (max-width: 576px) {
    h3 {
    font-size: 1.2rem;
  }
  p {
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 0;
  }
  }
`;
