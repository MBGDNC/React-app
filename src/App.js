import logo from './logo.svg';
import './App.css';
import { idHelpers} from './library/helpers';
import { RepositoryLink, ReactLink } from './components/AppLinks';
import { RandomValue } from './components/RandomValue';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <ReactLink />
          <RepositoryLink />
        </div>
        <h1>Hi, I'm Mateo</h1>
        <p>Your unique ID is: <div className="random">{idHelpers.generateId()}</div></p>
        <RandomValue />
      </header>
    </div>
  );
}

export default App;
