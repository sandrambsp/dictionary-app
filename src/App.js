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
          <Dictionary defaultKeyword="ocean" />
        </main>
        <footer className="text-center">Coded by Sandra Pereira</footer>
      </div>
    </div>
  );
}

export default App;
