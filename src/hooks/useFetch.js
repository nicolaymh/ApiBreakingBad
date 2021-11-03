export const useFetch = () => {
    const callApi = async () => {
        const urlQuotes = 'https://breakingbadapi.com/api/quotes';
        const respQuotes = await fetch(urlQuotes);
        const dataQuotes = await respQuotes.json();
        // console.log(dataQuotes);

        // {quote_id: 2, quote: 'Stay out of my territory.', author: 'Walter White', series: 'Breaking Bad'}

        //Uniendo las citas en un solo nombre:
        let arrayFinal = [];
        dataQuotes.forEach((element) => {
            let arrayTemp = [{ name: element.author, quotes: {} }];

            let uniendo = dataQuotes.map((ele) => {
                if (element.author === ele.author) {
                    return ele.quote;
                }
            });

            arrayFinal = [
                ...arrayFinal,
                { ...arrayTemp, quotes: [...uniendo] },
            ];
        });

        // console.log(arrayFinal);

        //Quitando citas indefinidas:
        arrayFinal = arrayFinal.map((element) => {
            const temp = element.quotes.filter((e) => e !== undefined);

            return { ...element, quotes: temp };
        });

        console.log(arrayFinal);

        //Eliminando elementos duplicados:
    };

    return { callApi };
};
