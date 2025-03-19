import reactLogo from "../assets/react.svg";
import "../index.css";
import Contents from "./contents";

function Page() {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to My Page about React</h1>
        <Contents />
      </main>
      <footer className="footer">All rights Reserved</footer>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <img src={reactLogo} width="100px" alt="React Logo" />
      <nav>
        <ul className="nav-bar">
          <li className="nav-list">Pricing</li>
          <li className="nav-list">About</li>
          <li className="nav-list">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Page;
