import { ReactNode } from 'react';
import { ButtonStyle } from './styles';

type ButtonProps = {
    children: ReactNode;
    background: string;
    type: string;
}

export function Button({ children, background, type }: ButtonProps) {
    return (
        <ButtonStyle type={type} style={{background: background}}>
            {children}
        </ButtonStyle>
    )
}
