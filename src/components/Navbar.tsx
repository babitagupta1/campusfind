function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="brand">
        <span className="brand-icon">C</span>
        CampusFind
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#items">Browse Items</a>
      </nav>

      <a href="#items" className="nav-button">
        Explore Items
      </a>
    </header>
  );
}

export default Navbar;