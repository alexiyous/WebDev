import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Header.css";


export default function Header() {
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