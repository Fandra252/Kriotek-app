import styled from "styled-components";

export const BannerDiv = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
`;

export const InnerDiv = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 12rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  h1 {
    font-size: 5rem;
    font-weight: 600;
    line-height: 1.5;
    padding: 0;
    margin-bottom: 1rem;
    span {
      font-weight: 200;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 2rem;
    margin-right: 2rem;
    h1 {
      font-size: 3.5rem;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 0.2rem;
    }
  }
`;

export const H1Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ExploreDiv = styled.div`
  span {
    display: inline-block;
    border-bottom: 1px solid white;

    h1 {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.5;
      margin-bottom: 0.5rem;
      gap: 0.5rem;
    }
  }
  @media screen and (max-width: 576px) {
    span {
      h1 {
        font-size: 1.3rem;
        font-weight: 500;
        line-height: 1.5;
      }
    }
  }
`;
