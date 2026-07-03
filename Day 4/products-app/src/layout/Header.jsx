import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Players</h1>
        </div>
        <div className="nav">
          <Link to={'/'} className="nav-link">Home</Link>
          <Link to={'/dashboard'} className="nav-link">Dashboard</Link>
          <Link to={'/about'} className="nav-link">About</Link>
        </div>
      </div>
    </header>
  );
}
