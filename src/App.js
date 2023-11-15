import './styles/App.scss';
import Home from './components/page/Home/Home'
import {ModalProvider} from 'context/modalContext'
import { useLocalStorage } from 'hooks/useLocalStorage';
import { movies } from 'stubs/movies';
import { Context } from 'context/context';

function App() {


  const [moviesList, setMoviesList] = useLocalStorage('movies', movies);
  return (


    
    <div className="App">

      <Context.Provider value={{
        moviesList,
        setMoviesList
      }}>
        <ModalProvider>
      <Home/>
      </ModalProvider>
      </Context.Provider>

    </div>
  );
}

export default App;
