import {
    deleteAuthorRepeated,
    joinQuotes,
    removeQuotes,
} from '../helpers/fetchFilterQuote';
import { images } from '../helpers/images';

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

        //! Add image link:
        const arrLink = arrayFinal.map((author, index) => {
            const arrTemp = images.filter(
                (character) => author.name === character.name,
            );

            return { id: index, ...author, img: arrTemp[0].img };
        });
        arrayFinal = [...arrLink];
    };
    return { callApi };
};
