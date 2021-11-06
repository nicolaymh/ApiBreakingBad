import { BootLoad } from './components/BootLoad';
import { Header } from './components/Header';
import { Spinner } from './components/Spinner';
import { useFetch } from './hooks/useFetch';
import { useSelectCharacter } from './hooks/useSelectCharacter';

import './style.css/App.css';
import './style.css/BootLoad.css';

const App = () => {
    const { infoCharacters, loading } = useFetch();
    const { selectCharacterQuote } = useSelectCharacter(infoCharacters);

    return (
        <>
            <Header
                infoCharacters={infoCharacters}
                selectCharacterQuote={selectCharacterQuote}
            />

            {loading ? (
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
            )}
        </>
    );
};

export default App;
