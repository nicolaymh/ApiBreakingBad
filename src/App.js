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

const App = () => {
    const [showComponent, setshowComponent] = useState(true);

    const { infoCharacters, loadingImages } = useFetch(setshowComponent);
    const { selectCharacterQuote, selectedAuthor, loadingCharacter } =
        useSelectCharacter(infoCharacters, setshowComponent);

    const lo =
        'https://www.pngkit.com/png/full/5-51836_nuevas-camisetas-de-breaking-bad-breaking-bad-vector.png';
    const lo2 =
        'https://www.nicepng.com/png/detail/64-647616_que-a-aportado-mexico-a-la-quimica-breaking.png';

    return (
        <>
            <Header
                infoCharacters={infoCharacters}
                selectCharacterQuote={selectCharacterQuote}
                lo={lo}
                lo2={lo2}
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
