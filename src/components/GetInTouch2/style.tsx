import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  margin-top: 4rem;
`;

export const InnerDiv = styled.div`
  width: 75%;
  height: 650px;
  border-radius: 40px;
  /* border: 1px solid black; */
  box-shadow: 0px 0px 20px 28px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`;

export const PinkDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  border: 2px solid black;
  box-shadow: 0px -14px ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
`;

export const FormDiv = styled.div`
  width: 45%;
  height: 100%;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  padding: 4rem;
  @media screen and (max-width: 576px) {
    width: auto;
    padding: 2rem;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 3rem;
    font-weight: 500;
    margin: 0;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
   h1{
    font-size: 2.3rem;
   }
   p{
    font-size: 0.9rem;
   }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 2rem 0;
`;

export const SectionDiv2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  textarea {
    resize: none;
    padding: 1rem 2rem;
    border: 1px solid black;
    border-radius: 20px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    height: 100px;
  }
  label {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const Input1Div = styled.div`
  width: 100%;
  label {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const Input2Div = styled.div`
  width: 100%;
  label {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const InputDiv1 = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 40px;
  overflow: hidden;
  padding: 1rem 1.2rem;
  margin-top: 0.5rem;
  input {
    padding-left: 0.5rem;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
  .logo {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const InputDiv2 = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 40px;
  overflow: hidden;
  padding: 1rem 1.2rem;
  margin-top: 0.5rem;
  input {
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;
    border: none;
    outline: none;
  }
  .logo {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
