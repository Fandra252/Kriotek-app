import styled from "styled-components";

export const Btn1 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 14px 24px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.1 ease-in;
  font-size: 1rem;
  border: none;
  &:hover{
    .NavLink1{
      scale: 1.1;
    }
  }
  
  .NavLink1 {
    color: ${({ theme }) => theme.colors.secondaryText};
    text-decoration: none;
  }
`;

export const Btn2 = styled.button`
width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 16px 30px;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-size: 1.1rem;
  border: none;
  .NavLink4{
    color: ${({ theme }) => theme.colors.secondaryText};
    text-decoration: none;
  }
  
`;

export const Btn3 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 50px;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: none;
  @media screen and (max-width: 576px) {
    padding: 0.6rem 1rem;
  font-size: 0.9rem;
  }
`;