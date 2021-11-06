import { useEffect, useState } from 'react';
import {
    AddImageLink,
    deleteAuthorRepeated,
    joinQuotes,
    removeQuotes,
} from '../helpers/fetchFilter';

export const useFetch = (setshowComponent) => {
    const [infoCharacters, setInfoCharacters] = useState([]);
    const [loadingImages, setLoadingImages] = useState(true);

    useEffect(() => {
        callApi();
    }, []);

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
        arrayFinal = AddImageLink(arrayFinal);

        setInfoCharacters([...arrayFinal]);

        setTimeout(() => {
            setLoadingImages(false);
        }, 1000);
    };

    return { infoCharacters, loadingImages };
};
