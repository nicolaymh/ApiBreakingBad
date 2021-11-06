import { useState } from 'react';
import { select } from '../helpers/select';

export const useSelectCharacter = (infoCharacters) => {
    const [selectCharacter, setSelectCharacter] = useState([]);

    const { selectCharacterQuote } = select(infoCharacters, setSelectCharacter);

    return { selectCharacterQuote, selectCharacter };
};
