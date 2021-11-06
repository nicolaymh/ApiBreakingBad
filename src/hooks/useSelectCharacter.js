import { useState } from 'react';
import { select } from '../helpers/select';

export const useSelectCharacter = (infoCharacters, setshowComponent) => {
    const [selectedAuthor, setSelectedAuthor] = useState({});
    const [loadingCharacter, setLoadingCharacter] = useState(true);

    const { selectCharacterQuote } = select(
        infoCharacters,
        setSelectedAuthor,
        setLoadingCharacter,
        setshowComponent,
    );

    return { selectCharacterQuote, selectedAuthor, loadingCharacter };
};
