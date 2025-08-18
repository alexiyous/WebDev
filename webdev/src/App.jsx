import { useState } from "react";
import "./App.css";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

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
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [count, setCount] = useState(0);

  function handleSelect(selected) {
    setSelectedTopic(selected);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {/* can do this to !selectedTopic &&  <p>Please Select A Topic</p> */}
          {!selectedTopic ? (
            <p>Please Select A Topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
      <Description count={count} setCountFunction={setCount} />
    </>
  );
}

export default App;
