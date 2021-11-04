import { BootLoad } from './components/BootLoad';
import { Header } from './components/Header';
import { Spinner } from './components/Spinner';
import { useFetch } from './hooks/useFetch';

import './style.css/App.css';

const App = () => {
    const { infoCharacters, loading } = useFetch();

    return (
        <>
            <Header />

            {loading && <Spinner />}

            {infoCharacters.map(({ id, name, img }) => (
                <BootLoad key={id} name={name} img={img} />
            ))}
        </>
    );
};

export default App;
