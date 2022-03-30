import logo from './logo.svg';
import './App.css';
import { idHelpers, arrayHelpers} from './library/helpers';
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
        {/* <p>Your random array element is: {arrayHelpers.getRandomElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}</p> */}
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        <RepositoryLink />
        
      </header>
    </div>
  );
}

export default App;
