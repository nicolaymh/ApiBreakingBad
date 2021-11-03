import { useFetch } from './hooks/useFetch';
import './style.css/App.css';

const App = () => {
    const { callApi } = useFetch();

    callApi();

    return (
        <div>
            <h1>Hola Mundo!!</h1>
        </div>
    );
};

export default App;
