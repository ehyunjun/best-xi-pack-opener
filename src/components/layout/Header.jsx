import Navbar from './Navbar.jsx';

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__brand">
        <span className="site-header__eyebrow">Football Card Collection</span>
        <h1>Best XI Pack Opener</h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
