import { useEffect, useState } from 'react';
import {
    AddImageLink,
    deleteAuthorRepeated,
    joinQuotes,
    removeQuotes,
} from '../helpers/fetchFilter';

export const useFetch = () => {
    const [infoCharacters, setInfoCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        callApi();
    }, []);

    const callApi = async () => {
        //! Call Quotes Api:
        const urlQuotes = 'https://breakingbadapi.com/api/quotes';
        const respQuotes = await fetch(urlQuotes);
        const dataQuotes = await respQuotes.json();

        let arrayFinal = [];

        //? Array to handle global information about quote:

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
            setLoading(false);
        }, 2000);
    };
    return { infoCharacters, loading };
};
