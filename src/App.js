import { useState } from 'react';
import { BootLoad } from './components/BootLoad';
import { CharacterQuotes } from './components/CharacterQuotes';
import { Header } from './components/Header';
import { Spinner } from './components/Spinner';
import { useFetch } from './hooks/useFetch';
import { useSelectCharacter } from './hooks/useSelectCharacter';

import './style.css/App.css';
import './style.css/BootLoad.css';

const App = () => {
    const [showComponent, setshowComponent] = useState(true);

    const { infoCharacters, loadingImages } = useFetch(setshowComponent);
    const { selectCharacterQuote, selectedAuthor, loadingCharacter } =
        useSelectCharacter(infoCharacters, setshowComponent);

    return (
        <>
            <Header
                infoCharacters={infoCharacters}
                selectCharacterQuote={selectCharacterQuote}
            />

            {showComponent ? (
                loadingImages ? (
                    <Spinner />
                ) : (
                    <main className='container main__container'>
                        {infoCharacters.map(({ id, name, img }, index) => (
                            <BootLoad
                                key={id}
                                index={index}
                                name={name}
                                img={img}
                            />
                        ))}
                    </main>
                )
            ) : loadingCharacter ? (
                <Spinner />
            ) : (
                <CharacterQuotes selectedAuthor={selectedAuthor} />
            )}
        </>
    );
};

export default App;
