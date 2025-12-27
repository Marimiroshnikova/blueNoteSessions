import { NavLink } from 'react-router-dom';
import noteIcon from '/musical-note.png';

export default function Header() {
  return (
    <header className="header">
      <div className="brand-wrapper">
        <div className="brand-icon">
        <img src={noteIcon} alt="Musical note" />
        </div>
        <NavLink to="/" className="brand">
          Blue Note Sessions
        </NavLink>
      </div>
      <nav className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/artists" className="nav-link">Artists</NavLink>
      </nav>
    </header>
  );
}