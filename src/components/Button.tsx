import React, { useState, useEffect } from 'react'

type Props = {
    item: string,
    onClick: () => void,
}

export const Button = ({ item, onClick }: Props) => {

    const [checked, setChecked] = useState(false);
    


    const handleClick = () => {
        onClick()
        setChecked(!checked)
    }


    return (
        <label
            className="checkbox checkbox--original"
        >
            <label htmlFor={item}>
                <input
                    type="checkbox"
                    id={item}
                    checked={checked}
                    onClick={() => handleClick()}
                />
                {item.toUpperCase()}
            </label>
        </label>

    )
}
