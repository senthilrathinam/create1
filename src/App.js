import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>This is my deployed appss</h1>
       <h2>Example.com - Employee Portal</h2>
        <h3>Current shipment stats</h3>
            <iframe
            width="960"
            height="720"
            src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/306802105982/dashboards/f4d6ae71-0e57-471b-877a-8f598785a670?directory_alias=senthil-quicksight-account1">
        </iframe>
      {/*
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
      </header>*/}
    </div>
  );
}

export default App;
