"use client";
import Header from "@/components/Header/Header";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "@/components/common/theme";
import Banner from "@/components/Banner/Banner";
import CardSection from "@/components/CardSection/CardSection";
import AboutUs from "@/components/AboutUs/AboutUs";
import Career from "@/components/Career/Career";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import GetIntouch2 from "@/components/GetInTouch2/GetInTouch";

const Containerdiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Page = () => {
  return (
    <ThemeProvider theme={theme}>
      <Containerdiv>
        <Header />
        <Banner />
       <CardSection/>
       <AboutUs/>
       <Portfolio/>
       <GetIntouch2 />
       <Career/>
      </Containerdiv>
      <Footer/>
    </ThemeProvider>
  );
};
Page.displayName = 'HomePage';

export default Page;


