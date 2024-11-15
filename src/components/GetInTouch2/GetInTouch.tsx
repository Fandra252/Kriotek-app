import React from "react";
import {
  Container,
  Form,
  FormDiv,
  InnerDiv,
  Input1Div,
  Input2Div,
  InputDiv1,
  InputDiv2,
  PinkDiv,
  SectionDiv,
  SectionDiv2,
  TextDiv,
} from "./style";
import { Button2 } from "../common/Button";
import "./main.css";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const GetInTouch = () => {
  return (
    <Container>
      <InnerDiv>
        <PinkDiv className="Img">
          <FormDiv>
            <TextDiv>
              <h1>Get In Touch</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                delectus harum sit amet consectetur adipisicing elit. Magni
                delectus harum
              </p>
            </TextDiv>
            <Form>
              <SectionDiv>
                <Input1Div>
                  <label htmlFor="">Name</label>
                  <InputDiv1>
                    <IoPersonOutline className="logo" />
                    <input type="text" placeholder="Your Name" value="Fanendra Choudhary" />
                  </InputDiv1>
                </Input1Div>
                <Input2Div>
                  <label htmlFor="">Email</label>
                  <InputDiv2>
                    <MdOutlineEmail className="logo" />
                    <input type="email" placeholder="Your Email" value="Fanendrachoudhary51@gmail.com" />
                  </InputDiv2>
                </Input2Div>
              </SectionDiv>
              <SectionDiv2>
                <label htmlFor="">Message</label>
                <textarea placeholder="Write here..." />
                <Button2 type="submit">Submit</Button2>
              </SectionDiv2>
            </Form>
          </FormDiv>
        </PinkDiv>
      </InnerDiv>
    </Container>
  );
};

export default GetInTouch;
