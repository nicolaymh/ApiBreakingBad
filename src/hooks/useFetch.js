import {
    deleteAuthorRepeated,
    joinQuotes,
    removeQuotes,
} from '../helpers/fetchFilterQuote';

export const useFetch = () => {
    const callApi = async () => {
        //! Call Quotes Api:
        const urlQuotes = 'https://breakingbadapi.com/api/quotes';
        const respQuotes = await fetch(urlQuotes);
        const dataQuotes = await respQuotes.json();

        //? Array to handle global information about quote:
        let arrayFinal = [];

        //* Join all quotes with its author:
        arrayFinal = joinQuotes(dataQuotes);

        //* Remove undefined quotes:
        arrayFinal = removeQuotes(arrayFinal);

        //* Delete authors repeated:
        arrayFinal = deleteAuthorRepeated(arrayFinal);

        console.log(arrayFinal);

        //! Call Character Api:
        const urlCharacter = `https://breakingbadapi.com/api/characters?name=Walter`;
        const respCharacter = await fetch(urlCharacter);
        const dataCharacter = await respCharacter.json();

        //* Consult Character:
        
    };

    return { callApi };
};
