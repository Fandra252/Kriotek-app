import styled from "styled-components";

export const CardContainer = styled.div`
  width: 580px;
  height: 450px;
  border-radius: 40px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    height: 300px;
  }
`;

export const InnerDiv1 = styled.div`
  width: 100%;
  height: fit-content;

  h1 {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 2.2rem;
    margin: 0.5rem 0;
  }
  @media screen and (max-width: 576px) {
    h1{
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 0.2rem;
    }
  }
`;

export const InnerDiv2 = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: end;
`;
