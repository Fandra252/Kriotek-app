import React from "react";
import {
  FooterCon,
  FooterCon2,
  InnerDiv1,
  InnerDiv2,
  InnerDiv3,
  Logo,
  LogoDiv,
  NavDiv,
  Privacy,
} from "./style";
import Image from "next/image";
import ImageUrl from "@/assets/images/KriotekBlack (2).png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterCon>
      <FooterCon2>
        <InnerDiv1>
          <Image className="img" src={ImageUrl} alt="Logo" />
          <h2>Follow on</h2>
        </InnerDiv1>
        <InnerDiv2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eos
            similique beatae necessitatibus nulla.
          </p>
          <LogoDiv>
            <Logo>
              <FaFacebookF className="logo" />
            </Logo>
            <Logo>
              <FaTwitter className="logo" />
            </Logo>
            <Logo>
              <FaInstagram className="logo" />
            </Logo>
            <Logo>
              <IoIosMail className="logo" />
            </Logo>
            <Logo>
              <FaLinkedinIn className="logo" />
            </Logo>
          </LogoDiv>
        </InnerDiv2>
        <hr></hr>
        <InnerDiv3>
          <NavDiv>
            <p>Home</p>
            <p>About us</p>
            <p>Our services</p>
            <p>Portfolio</p>
            <p>Career</p>
            <p>Contact us</p>
          </NavDiv>
          <Privacy>
            <p>Privacy Policy</p>
            <p className="p2">Terms & Conditions</p>
          </Privacy>
          <p>Copyright@2024 Kriotek System, All Rights Reserved.</p>
        </InnerDiv3>
      </FooterCon2>
    </FooterCon>
  );
};

export default Footer;
