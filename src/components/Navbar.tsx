import sideImage from "../assets/sidelogo.jpg";

type NavbarProps = {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  title: string;
  profileName: string;
};

export default function Navbar({
  darkMode,
  onToggleDarkMode,
  title,
  profileName,
}: NavbarProps) {
  return (
    <header className="campus-navbar">
      <div className="page-heading">
        <span className="breadcrumb">Workspace /</span>
        <h1>{title}</h1>
      </div>
      <div className="navbar-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀" : "◐"}
        </button>
        <button className="profile-button" type="button" aria-label="Open user profile">
          <img className="profile-avatar" src={sideImage} alt={profileName} />
          <span className="profile-copy">
            <strong>{profileName}</strong>
            <small>Student</small>
          </span>
          <span className="profile-chevron">⌄</span>
        </button>
      </div>
    </header>
  );
}