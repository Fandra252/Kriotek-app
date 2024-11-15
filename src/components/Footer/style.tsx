import styled from "styled-components";

export const FooterCon = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.secondaryText};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterCon2 = styled.div`
  width: 80%;
  hr {
    border-color: ${({ theme }) => theme.colors.text};
  }
  @media screen and (max-width: 576px) {
    width: 95%;
  }
`;

export const InnerDiv1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 2rem 0;
  .img {
    width: 250px;
    height: 100px;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 400;
  }
  @media screen and (max-width: 576px) {
    padding: 1rem 0;
    .img {
      width: 200px;
      height: 80px;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const InnerDiv2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    width: 40%;
  }
  @media screen and (max-width: 576px) {
    justify-content: center;
    margin-bottom: 1rem;
    flex-direction: column;
    p {
      width: 100%;
      text-align: center;
    }
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 576px) {
    gap: 10px;
  }
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .logo {
    width: 60%;
    height: 60%;
  }
  @media screen and (max-width: 576px) {
    width: 35px;
    height: 35px;
  }
`;

export const InnerDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 100%;
    flex-direction: column;
    margin: 0;
    text-align: center;
  }
`;
export const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 576px) {
    margin: 10px;
    gap: 10px;
    flex-wrap: wrap;
    p{
      margin: 2px 0;

    }
  }
`;

export const Privacy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .p2 {
    border-left: 1px solid white;
    padding-left: 10px;
  }
`;
