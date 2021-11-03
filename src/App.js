import './App.css';
import {useState} from "react"
import {useEffect} from "react"

import Characters from "./components/Characters"

function App() {

  const [characterList, setCharacterList] = useState([])
  const [next, setNext] = useState(1)
  const [maxPages, setMaxPages] = useState(0)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((response) => response.json())
      .then((response) => {
        setMaxPages(response.info.pages)
        setCharacterList(response.results)
      })
      .catch((err) => console.log(err))
  }, [next])

  const previousPage = () => {
    if(next > 1)
    {
      setNext(next - 1)
    }
  }

  const nextPage = () => {
    if(next < maxPages)
    {
      setNext(next + 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="buttonPages">
          <button onClick={previousPage}>Voltar</button>
          <button onClick={nextPage}>Próximo</button>
        </div>
        <Characters characterList={characterList}/>
      </header>
    </div>
  );
}

export default App;
