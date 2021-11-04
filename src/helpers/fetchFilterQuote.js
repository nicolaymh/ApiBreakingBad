//? Functions to filter useFetch:

//* Join all quotes with its author:
export const joinQuotes = (dataQuotes) => {
    let arrayFinal = [];
    dataQuotes.forEach((element) => {
        let arrayTemp = { name: element.author, quotes: null };

        const uniendo = dataQuotes.map((ele) =>
            element.author === ele.author ? ele.quote : null,
        );
        arrayTemp = { ...arrayTemp, quotes: uniendo };
        arrayFinal = [...arrayFinal, arrayTemp];
    });

    return arrayFinal;
};

//* Remove undefined quotes:
export const removeQuotes = (RemoveUndefined) => {
    let arrayFinal = [];
    arrayFinal = RemoveUndefined.map((element) => {
        const temp = element.quotes.filter((e) => e !== null);
        return { ...element, quotes: temp };
    });

    return arrayFinal;
};

//* Delete authors repeated:
export const deleteAuthorRepeated = (deleteAuthor) => {
    let arrayFinal = [];
    const names = deleteAuthor.map((author) => author.name);

    arrayFinal = deleteAuthor.filter(
        ({ name }, index) => !names.includes(name, index + 1),
    );

    return arrayFinal;
};
