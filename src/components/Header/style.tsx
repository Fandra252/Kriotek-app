import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 5px 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 576px) {
    width: 100%;
    padding: 0.2rem 0rem;
    justify-content: space-between;
  }
`;

export const ImageDiv = styled.div`
  width: 200px;
  height: 100%;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 576px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

  .NavLink {
    font-size: 1.2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #353535cf;
    }
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .NavLink3 {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    border-radius: 50px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.2s ease-in-out;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const MobileIcons = styled.div`
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
    margin-right: 1.5rem;
    font-size: 1.5rem;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 576px) {
    width: 100vw;
    height: fit-content;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondaryText};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 3rem 0;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
    }
    .mobileMenu {
      &:hover {
        scale: 1.2;
      }
    }
  }
`;
