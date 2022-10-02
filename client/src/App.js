import logo from './logo.svg';
import './App.css';
import {QUERY_GAMES} from './utils/queries'
import {useQuery} from '@apollo/client'
function App() {
const {loading, data} = useQuery(QUERY_GAMES);
const games = data?.games || [];
console.log(games)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
