import { useState } from 'react';

export const useSelectCharacter = (infoCharacters) => {
    const [selectCharacter, setSelectCharacter] = useState([]);

    const selectCharacterQuote = ({ target }) => {
        const characterQuotes = infoCharacters
            .filter((character) => {
                return character.name === target.value;
            })
            .map((char) => {
                return { name: char.name, quotes: char.quotes };
            });

        console.log(characterQuotes);
        setSelectCharacter(characterQuotes);
    };

    return { selectCharacterQuote };
};
