import React, { FC, PropsWithChildren, useState } from "react";

export enum CardType {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    type: CardType;
    onClick: (num: number) => void;
}

const Card:FC<PropsWithChildren<CardProps>> = ({width, height, type, onClick, children}) => {
    const [num, setNum] = useState(7);

    return (
        <div 
            style={{width, height, 
                border: type === CardType.outlined ? '2px solid blue' : 'none',
                background: type === CardType.primary ? 'lightgray' : 'none'
            }}
            onClick={() => onClick(num)}
        >
            {children}
        </div>
    )
}

export default Card;