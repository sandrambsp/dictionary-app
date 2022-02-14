import Dictionary from "./Dictionary.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://www.sandrapereira.me/"
            target="_blank"
            rel="noreferrer"
          >
            Sandra Pereira
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/sandrambsp/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
