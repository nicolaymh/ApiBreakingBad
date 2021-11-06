export const select = (
    infoCharacters,
    setSelectCharacter,
    setLoadingCharacter,
    setshowComponent,
) => {
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

        setLoadingCharacter(false);

        characterQuotes.length > 0
            ? setshowComponent(false)
            : setshowComponent(true);
    };

    return { selectCharacterQuote };
};
