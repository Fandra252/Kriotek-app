import { ReactNode, MouseEventHandler } from 'react';

export interface ButtonProps {
    children: ReactNode;              // Allows any valid JSX content
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
}