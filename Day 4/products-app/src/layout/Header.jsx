export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Players</h1>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#players" className="nav-link">Players</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  );
}
