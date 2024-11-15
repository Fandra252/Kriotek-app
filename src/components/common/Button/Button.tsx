import React, { FC} from "react";
import { Btn1, Btn2, Btn3 } from "./style";
import { ButtonProps } from './type';

export const Button1: FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
      <Btn1 onClick={onClick} type={type}>
          {children}
      </Btn1>
  );
};

export const Button2: FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
      <Btn2 onClick={onClick} type={type}>
          {children}
      </Btn2>
  );
};

export const Button3: FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
      <Btn3 onClick={onClick} type={type}>
          {children}
      </Btn3>
  );
};
