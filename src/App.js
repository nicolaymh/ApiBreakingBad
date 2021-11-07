import { useState } from 'react';
import { BootLoad } from './components/BootLoad';
import { CharacterQuotes } from './components/CharacterQuotes';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Spinner } from './components/Spinner';
import { useFetch } from './hooks/useFetch';
import { useSelectCharacter } from './hooks/useSelectCharacter';

import './style.css/App.css';
import './style.css/BootLoad.css';

import imgLogo1 from './images/logo1.png';
import imgLogo2 from './images/logo2.png';

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
                imgLogo1={imgLogo1}
                imgLogo2={imgLogo2}
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

            {!loadingImages && <Footer />}
        </>
    );
};

export default App;
