import React from 'react';

export const SelectCharacter = ({ infoCharacters, selectCharacterQuote }) => {
    return (
        <select
            className='select__container'
            name='names'
            onChange={selectCharacterQuote}
        >
            <option className='select__option' value={-1}>
                --Select-Name--
            </option>
            {infoCharacters.map(({ name }, index) => (
                <option
                    className='select__option--sons'
                    key={index}
                    value={name}
                >
                    {name}
                </option>
            ))}
        </select>
    );
};
