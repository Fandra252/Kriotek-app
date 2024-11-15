"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button1, Button2 } from "../common/Button/Button";
import Image from "next/image";
import Imageurl from "@/assets/images/Kriotek.png";
import { Container, ImageDiv, NavContainer, BtnDiv, MobileIcons, MobileMenu } from "./style";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

 const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Container>
      <ImageDiv>
      <Link className="NavLink1" href={"/"}>
        <Image
          className="img"
          src={Imageurl}
          alt="Kriotek Logo"
          width={150}
          height={50}
          priority
        />
            
          </Link>
      </ImageDiv>
      <NavContainer>
        <Button1>
          <Link className="NavLink1" href={"/"}>
            Home
          </Link>
        </Button1>

        <Link className="NavLink" href={"/about"}>
          About us
        </Link>
        <Link className="NavLink" href={"/services"}>
          Our services
        </Link>
        <Link className="NavLink" href={"/portfolio"}>
          Portfolio
        </Link>
        <Link className="NavLink" href={"/career"}>
          Career
        </Link>
        <Link className="NavLink" href={"/contact"}>
          Contact us
        </Link>
      </NavContainer>
      <BtnDiv>
        <Link className="NavLink3" href={"/register"}>
          Sign up
        </Link>
        <Button2><Link className="NavLink4" href={"/login"}>
        Login
</Link></Button2>
      </BtnDiv>
      <MobileIcons onClick={()=> setIsOpen(!isOpen)}>
        {isOpen ? <IoCloseOutline/> : <RxHamburgerMenu/>}
      </MobileIcons>
    </Container>
    {isOpen && (
      <MobileMenu>
      <a href="/" className="mobileMenu">Home</a>
      <a href="#" className="mobileMenu">About us</a>
      <a href="#" className="mobileMenu">Our services</a>
      <a href="#" className="mobileMenu">Portfolio</a>
      <a href="#" className="mobileMenu">Career</a>
      <a href="#" className="mobileMenu">Contact us</a>
      <a href="#" className="logSignBtn">Sign Up</a>
      <a href="#" className="logSignBtn">Log In</a>
      </MobileMenu>)}
      </>
  );
}


export default Header;
