import { BootLoad } from './components/BootLoad';
import { Header } from './components/Header';
import { Spinner } from './components/Spinner';
import { useFetch } from './hooks/useFetch';

import './style.css/App.css';
import './style.css/BootLoad.css';

const App = () => {
    const { infoCharacters, loading } = useFetch();

    return (
        <>
            <Header />

            {loading && <Spinner />}

            <main className='main__container container'>
                {infoCharacters.map(({ id, name, img }, index) => (
                    <BootLoad key={id} index={index} name={name} img={img} />
                ))}
            </main>
        </>
    );
};

export default App;
