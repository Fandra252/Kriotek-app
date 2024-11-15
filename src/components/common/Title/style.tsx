import styled from "styled-components";

 
 export const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p{
    font-size: 1.1rem;
    line-height: 2rem;
  }
  h1{
    font-size: 2.6rem;
    font-weight: 500;
    margin: 0.5rem 0;
  }
  .img{
    width: 200px;
    height: auto;
    object-fit: cover;
    margin-bottom: 0;
  }
  @media screen and (max-width: 576px) {
    margin: 0 3rem;
    justify-content: center;
    p{
      font-size: 0.9rem;
      line-height: 1.5;
    }
    h1{
    font-size: 2.2rem;
    font-weight: 500;
    text-align: center;
  }
  .img{
    width: 160px;
  }
  }
 `;

 export const HrDiv = styled.span`
 width: 300px;
 display: flex;
 gap: 40px;
 hr{
    border: 1px solid ${({theme})=> theme.colors.secondary};
    rotate: calc(90deg);
    margin-top: 1.2rem;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
 }
 h3{
  display: inline-block;
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0;
    text-transform: uppercase;
    color: ${({theme})=> theme.colors.secondary};
 }
 @media screen and (max-width: 576px) {
  /* justify-content: center; */
  }
 `;