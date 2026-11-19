import sideImage from "../assets/sidelogo.jpg";
import { BsMoon, BsSun, BsChevronDown } from "react-icons/bs";

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
    <header className="navbar campus-navbar bg-body border-bottom px-4 py-3 sticky-top">
      <div>
        <small className="text-secondary">Workspace /</small>
        <h1 className="h4 mb-0">{title}</h1>
      </div>
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={onToggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
        <button className="btn btn-outline-secondary d-flex align-items-center gap-2" type="button" aria-label="Open user profile">
          <img className="rounded-circle" width="32" height="32" src={sideImage} alt={profileName} />
          <span className="d-none d-md-flex flex-column text-start">
            <strong className="small">{profileName}</strong>
            <small className="text-secondary">Student</small>
          </span>
          <BsChevronDown />
        </button>
      </div>
    </header>
  );
}