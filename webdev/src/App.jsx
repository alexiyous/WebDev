import { useState } from "react";
import "./App.css";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

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

  function handleSelect(selected) {
    console.log(selected);
  }

  return (
    <>
      <Header/>
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=> handleSelect("Components")}>Components</TabButton>
            <TabButton onSelect={()=> handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={()=> handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={()=> handleSelect("State")}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
      <Description count={count} setCountFunction={setCount} />
    </>
  );
}

export default App;
