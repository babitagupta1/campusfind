import { APP_NAME, APP_DESCRIPTION } from "../constants/app";

type NavbarProps = {
  onReportClick: () => void;
};

export default function Navbar({ onReportClick }: NavbarProps) {
  return (
    <header className="navbar">
      <a className="brand" href="#home">
        <span className="brand-icon">C</span>
        <span>
          <strong>{APP_NAME}</strong>
          <small>{APP_DESCRIPTION}</small>
        </span>
      </a>

      <button className="button button-primary" onClick={onReportClick}>
        + Report an Item
      </button>
    </header>
  );
}