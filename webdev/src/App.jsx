import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

const wisdomPhrases = [
  "React is a library for building user interfaces.",
  "Vite is a build tool that aims to provide a faster and leaner development experience.",
  "Components are the building blocks of React applications.",
];

function getRandomWisdom(length) {
  return Math.floor(Math.random() * length);
}

function Description({ count, setCountFunction }) {
  return (
    <>
      <div className="card">
        <button onClick={() => setCountFunction((count) => count + 1)}>
          Test Clicking: {count}
        </button>
      </div>
      <div>
        <p className="read-the-docs">CLICK THOSE LOGOS AND FIND OUT 🤫</p>
        <h1>{wisdomPhrases[getRandomWisdom(wisdomPhrases.length)]}</h1>
      </div>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <Description count={count} setCountFunction={setCount} />
    </>
  );
}

export default App;
