import "./index.css";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="airbnb" height={32}></img>
    </header>
  );
}
