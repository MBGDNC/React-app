import logo from './logo.svg';
import './App.css';
import { idHelpers} from './library/helpers';
import { RepositoryLink } from './components/RepositoryLink';
import { RandomValue } from './components/RandomValue';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I'm Mateo</h1>
        <p>Your unique ID is: <div className="random">{idHelpers.generateId()}</div></p>
        <RandomValue />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        <RepositoryLink />
        
      </header>
    </div>
  );
}

export default App;
