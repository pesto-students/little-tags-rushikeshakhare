import React, { useState } from 'react';

interface ISize {
    name: string;
    disabled: boolean;
}
interface ISizeSelect {
    sizes: ISize[];
    handleSizeSelect: (size: string) => void;
}

export const SizeSelect = ({ sizes, handleSizeSelect }: ISizeSelect) => {

    const [selectedSize, setSelectedSize] = useState<string>();

    const selectSize = (size: ISize) => {
        setSelectedSize(size.name);
        handleSizeSelect(size.name);
    }    

    return (
        <div className="size-list">
            <ul>
                {
                    sizes.map((size, index) => (
                        <li key={`${index}-${size}`} className={size.name === selectedSize ? 'selected' : ''}> 
                            <button onClick={() => selectSize(size)} disabled={size.disabled} className="btn-flat pointer">{size.name}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}