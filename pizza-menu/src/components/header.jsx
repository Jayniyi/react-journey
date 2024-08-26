import HeadImg from "../assets/Screenshot (38).png";
import logo from "../logo.svg";


const reactDescriptions = ["Fundamental", "Crucial", "core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
 export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={HeadImg} className="lol" alt="just-img" />
        Learn React
      </a>
      <p>{reactDescriptions[genRandomInt(2)]} my guy</p>
    </header>
  );
}