import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
          <p className="read-the-docs">CLICK THOSE LOGOS AND FIND OUT 🤫</p>
    </>
  )
}


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Description count={count} setCountFunction={setCount} />
    </>
  );
}

export default App;
