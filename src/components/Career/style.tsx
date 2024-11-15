import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 7rem 0;
  @media screen and (max-width: 576px) {
    width: 100%;
    justify-content: center;
    padding: 4rem 0;
  }
`;

export const SubConatiner = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 576px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ImgDiv = styled.div`
  width: 45%;
  .img {
    width: 95%;
    height: 700px;
    object-fit: cover;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
  @media screen and (max-width: 576px) {
    width: 90%;
    align-items: center;
    justify-content: center;
    .img {
      width: 100%;
    }
  }
`;

export const TextDiv = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 3rem;
  @media screen and (max-width: 576px) {
    margin-top: 1rem;
  }
`;
