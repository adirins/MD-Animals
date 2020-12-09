import React, { useState } from 'react'

type Props = {
    item: string,
    onClick: () => void,
}

export const CheckedButton = ({ item, onClick }: Props) => {


    return (
        <label
            className="checkbox"
            onClick={() => onClick()}
        >
            {item}
        </label>

    )
}
