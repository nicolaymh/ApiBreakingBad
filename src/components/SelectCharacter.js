import React from 'react';

export const SelectCharacter = ({ infoCharacters, selectCharacterQuote }) => {
    return (
        <select name='names' onChange={selectCharacterQuote}>
            <option value={-1}>-Select-Name-</option>
            {infoCharacters.map(({ name }, index) => (
                <option key={index} value={name}>
                    {name}
                </option>
            ))}
        </select>
    );
};
