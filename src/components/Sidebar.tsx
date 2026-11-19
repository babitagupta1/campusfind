import { APP_DESCRIPTION, APP_NAME } from "../constants/app";
import sideImage from "../assets/sidelogo.jpg";
import {
  BsBell,
  BsGrid,
  BsQuestionCircle,
  BsSearch,
  BsGear,
  BsFileText,
} from "react-icons/bs";

type SidebarProps = {
  activeSection: string;
  onNavigate: (section: string) => void;
  profileName: string;
};

const navItems: Array<[string, string, typeof BsGrid]> = [
  ["Dashboard", "dashboard", BsGrid],
  ["Browse Items", "browse", BsSearch],
  ["My Reports", "reports", BsFileText],
  ["Notifications", "notifications", BsBell],
  ["Settings", "settings", BsGear],
];

export default function Sidebar({
  activeSection,
  onNavigate,
  profileName,
}: SidebarProps) {
  return (
    <aside className="sidebar bg-body border-end p-3 d-flex flex-column">
      <a className="navbar-brand d-flex align-items-center gap-2 mb-4" href="#home" aria-label="CampusFind home">
        <span className="bg-primary text-white rounded p-2"><BsSearch /></span>
        <span className="d-flex flex-column">
          <strong>{APP_NAME}</strong>
          <small className="text-secondary">{APP_DESCRIPTION}</small>
        </span>
      </a>
      <div className="card border-0 bg-primary-subtle mb-4 overflow-hidden">
        <img className="card-img-top" src={sideImage} alt="" aria-hidden="true" />
        <div className="card-body py-2"><small className="text-primary-emphasis">Reconnect what matters.</small></div>
      </div>

      <nav className="nav nav-pills flex-column gap-1" aria-label="Main navigation">
        <span className="text-uppercase text-secondary small fw-semibold px-3 mb-2">Workspace</span>
        {navItems.map(([label, icon, Icon]) => (
          <button
            className={`nav-link text-start d-flex align-items-center gap-2 ${activeSection === icon ? "active" : ""}`}
            type="button"
            onClick={() => onNavigate(icon)}
            key={label}
            aria-current={activeSection === icon ? "page" : undefined}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-4">
        <div className="alert alert-primary d-flex gap-2 align-items-start py-2">
          <BsQuestionCircle className="mt-1" />
          <div>
            <strong className="d-block">Need a hand?</strong>
            <small>We're here to help.</small>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 border-top pt-3">
          <img className="rounded-circle" width="36" height="36" src={sideImage} alt={profileName} />
          <div>
            <strong className="d-block small">{profileName}</strong>
            <small className="text-secondary">Student account</small>
          </div>
        </div>
        <small className="text-secondary d-block mt-3">© 2024 CampusFind</small>
      </div>
    </aside>
  );
}
