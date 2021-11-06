export const select = (
    infoCharacters,
    setSelectedAuthor,
    setLoadingCharacter,
    setshowComponent,
) => {
    const selectCharacterQuote = ({ target }) => {
        const characterQuotes = infoCharacters.filter((character) => {
            return character.name === target.value;
        });

        setSelectedAuthor(characterQuotes[0]);

        setLoadingCharacter(false);
        characterQuotes.length > 0
            ? setshowComponent(false)
            : setshowComponent(true);
    };

    return { selectCharacterQuote };
};
