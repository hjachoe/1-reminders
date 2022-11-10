import "./App.css";

function App() {
  function sumTest(a: number, b: number) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <p>One plus one equals {sumTest(1, 1)}</p>
      <header className="App-header">
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
