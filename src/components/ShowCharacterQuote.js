import React from 'react';

export const ShowCharacterQuote = ({ selectCharacter }) => {
    const { name } = selectCharacter;

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};
