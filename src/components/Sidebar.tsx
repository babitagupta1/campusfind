import { APP_DESCRIPTION, APP_NAME } from "../constants/app";
import sideImage from "../assets/sidelogo.jpg";

type SidebarProps = {
  activeSection: string;
  onNavigate: (section: string) => void;
  profileName: string;
};

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    home: "M3 10.5 12 3l9 7.5M5.5 9v11h13V9M9 20v-6h6v6",
    dashboard: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
    browse: "m21 21-4.4-4.4M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z",
    reports: "M6 3h9l3 3v15H6zM9 11h6M9 15h6M9 7h3",
    notifications: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4",
    settings:
      "M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.1h-2.5v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H6.5v-2.5h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.1H15v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1V14h-.1a1.7 1.7 0 0 0-1.5 1Z",
  };

  return (
    <svg className="sidebar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

const navItems = [
  ["Dashboard", "dashboard"],
  ["Browse Items", "browse"],
  ["My Reports", "reports"],
  ["Notifications", "notifications"],
  ["Settings", "settings"],
];

export default function Sidebar({
  activeSection,
  onNavigate,
  profileName,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <a className="sidebar-brand" href="#home" aria-label="CampusFind home">
        <span className="sidebar-brand-mark">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m15.5 15.5 5 5M8.5 10.5h4M10.5 8.5v4" />
          </svg>
        </span>
        <span>
          <strong>{APP_NAME}</strong>
          <small>{APP_DESCRIPTION}</small>
        </span>
      </a>
      <div className="sidebar-image-card">
        <img src={sideImage} alt="" aria-hidden="true" />
        <span>Reconnect what matters.</span>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <span className="sidebar-label">Workspace</span>
        {navItems.map(([label, icon]) => (
          <button
            className={`sidebar-link ${activeSection === icon ? "active" : ""}`}
            type="button"
            onClick={() => onNavigate(icon)}
            key={label}
            aria-current={activeSection === icon ? "page" : undefined}
          >
            <Icon name={icon} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-help">
          <span className="help-icon">?</span>
          <div>
            <strong>Need a hand?</strong>
            <p>We're here to help.</p>
          </div>
        </div>
        <div className="sidebar-user">
          <img src={sideImage} alt={profileName} />
          <div>
            <strong>{profileName}</strong>
            <span>Student account</span>
          </div>
        </div>
        <p className="sidebar-copyright">© 2024 CampusFind</p>
      </div>
    </aside>
  );
}
