import { useState } from 'react';
import { select } from '../helpers/select';

export const useSelectCharacter = (infoCharacters, setshowComponent) => {
    const [selectCharacter, setSelectCharacter] = useState([]);
    const [loadingCharacter, setLoadingCharacter] = useState(true);

    const { selectCharacterQuote } = select(
        infoCharacters,
        setSelectCharacter,
        setLoadingCharacter,
        setshowComponent,
    );

    return { selectCharacterQuote, selectCharacter, loadingCharacter };
};
