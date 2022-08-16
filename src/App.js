import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>

      <Dictionary />

      <footer>
        <p>
          <a
            href="https://github.com/duffy28/dictionary-app"
            target="_blank"
            rel="noreferrer"
            className="git-link"
          >
            Open-Source Code
          </a>{" "}
          by Shaun Duffy
        </p>
      </footer>
    </div>
  );
}

export default App;
