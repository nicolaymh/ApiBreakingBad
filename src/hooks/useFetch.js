export const useFetch = () => {
    const callApi = async () => {
        const urlQuotes = 'https://breakingbadapi.com/api/quotes';
        const respQuotes = await fetch(urlQuotes);
        const dataQuotes = await respQuotes.json();

        //? Uniendo las citas en un solo nombre:
        let arrayFinal = [];
        dataQuotes.forEach((element) => {
            let arrayTemp = { name: element.author, quotes: null };

            let uniendo = dataQuotes.map((ele) =>
                element.author === ele.author ? ele.quote : null,
            );
            arrayTemp = { ...arrayTemp, quotes: uniendo };
            arrayFinal = [...arrayFinal, arrayTemp];
        });

        //? Quitando citas indefinidas:
        arrayFinal = arrayFinal.map((element) => {
            const temp = element.quotes.filter((e) => e !== null);

            return { ...element, quotes: temp };
        });

        //? Eliminando elementos duplicados:
        const names = arrayFinal.map((o) => o.name);
        const filtered = arrayFinal.filter(
            ({ name }, index) => !names.includes(name, index + 1),
        );
        console.log(filtered);
    };

    return { callApi };
};
