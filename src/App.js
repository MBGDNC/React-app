import logo from './logo.svg';
import './App.css';
import { nanoid } from "nanoid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I'm Mateo</h1>
        <p>Your unique ID is: {nanoid()}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        <a className="App-link" href="https://github.com/MBGDNC/React-app" rel="noopener noreferrer" target="_blank">GitHub Repository</a>
      </header>
    </div>
  );
}

export default App;
