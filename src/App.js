import './styles/App.scss';
import Home from './components/page/Home/Home'
// import ModalProvider from 'components/providers/modalProvider';
import {ModalProvider} from 'context/modalContext'
import { useLocalStorage } from 'hooks/useLocalStoreg';
import { movie } from 'stubs/movie';
import { Context } from 'context/context';

function App() {


  const [movies, setMovies] = useLocalStorage('movies', movie);
  return (


    
    <div className="App">

      <Context.Provider value={{
        movies,
        setMovies
      }}>
        <ModalProvider>
      {/* <ModalProvider> */}
      <Home/>
      {/* </ModalProvider> */}
      </ModalProvider>
      </Context.Provider>

    </div>
  );
}

export default App;
