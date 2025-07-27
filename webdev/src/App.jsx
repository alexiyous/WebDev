import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CORE_CONCEPTS } from "./data.js";

const wisdomPhrases = [
  "React is a library for building user interfaces.",
  "Vite is a build tool that aims to provide a faster and leaner development experience.",
  "Components are the building blocks of React applications.",
];

function getRandomWisdom(length) {
  return Math.floor(Math.random() * length);
}

function Header() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite Logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React Logo" />
        </a>
        <div>
          <h1>Learning React With Vite</h1>
        </div>
      </div>
    </>
  );
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

function CoreConcept({ imgSrc, title, description }) {
  return (
    <li>
      <img src={imgSrc} alt="React Core Concepts Logo" className="core-concepts-logo"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept
                key={index}
                imgSrc={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
      </main>
      <Description count={count} setCountFunction={setCount} />
    </>
  );
}

export default App;
