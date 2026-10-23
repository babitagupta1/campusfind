import { useState } from "react";
import "./App.css";

import { useItems } from "./hooks/useItems";
import { useItemFilters } from "./hooks/useItemFilters";

import type { Item, ItemFormValues } from "./types/item";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ItemStats from "./components/ItemStats";
import ItemFilters from "./components/ItemFilter";
import ItemCard from "./components/ItemCard";
import ItemDetails from "./components/ItemDetails";
import ReportItem from "./components/ReportItem";
import EditItem from "./components/EditItem";
import EmptyState from "./components/EmptyState";

export default function App() {
  const { itemList, addItem, updateItem, deleteItem } = useItems();

  const {
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    categoryFilter,
    setCategoryFilter,
    filteredItems,
    clearFilters,
  } = useItemFilters(itemList);

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [showReportForm, setShowReportForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [profileName, setProfileName] = useState("Babita Gupta");

  const sectionTitles: Record<string, string> = {
    dashboard: "Dashboard",
    browse: "Browse Items",
    reports: "My Reports",
    notifications: "Notifications",
    settings: "Settings",
  };

  function handleAddItem(values: ItemFormValues) {
    addItem(values);
    setShowReportForm(false);
  }

  function handleReportClick() {
    setShowReportForm(true);
  }

  function handleUpdateItem(values: ItemFormValues) {
    if (!editingItem) return;

    updateItem(editingItem.id, values);
    setEditingItem(null);
  }

  function handleDeleteItem(id: number) {
    deleteItem(id);

    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }

    if (editingItem?.id === id) {
      setEditingItem(null);
    }
  }

  function handleEditItem(item: Item) {
    setSelectedItem(null);
    setEditingItem(item);
  }

  function renderItemsSection(title: string, description: string, items = filteredItems) {
    return (
      <section className="browse-section">
        <div className="section-heading">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <span className="result-count">
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>
        </div>

        <ItemFilters
          search={search}
          setSearch={setSearch}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          clearFilters={clearFilters}
        />

        {items.length === 0 ? (
          <EmptyState onClear={clearFilters} />
        ) : (
          <div className="items-grid">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onViewDetails={setSelectedItem}
                onEdit={handleEditItem}
                onDelete={handleDeleteItem}
              />
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`} id="home">
      <Sidebar
        activeSection={activeSection}
        onNavigate={setActiveSection}
        profileName={profileName}
      />
      <div className="app-shell">
        <Navbar
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode((value) => !value)}
          title={sectionTitles[activeSection]}
          profileName={profileName}
        />

        <main className="main-content">
          {activeSection === "dashboard" && (
            <>
              <section className="hero" id="dashboard">
                <div className="hero-copy">
                  <span className="eyebrow">YOUR CAMPUS COMMUNITY</span>
                  <h2>Lost something? <span>Find it here.</span></h2>
                  <p>
                    Report lost belongings, share found items, and help your
                    campus community reconnect with what matters.
                  </p>
                  <button
                    type="button"
                    className="button button-primary hero-button"
                    onClick={handleReportClick}
                  >
                    + Report an item
                  </button>
                </div>
              </section>
              <ItemStats items={itemList} />
              {renderItemsSection(
                "Recent campus items",
                "Browse the latest lost and found reports."
              )}
            </>
          )}
          {activeSection === "browse" &&
            renderItemsSection("Browse campus items", "Search and filter all campus reports.")}
          {activeSection === "reports" &&
            renderItemsSection("My reports", "Manage the reports you have submitted.", filteredItems)}
          {activeSection === "notifications" && (
            <section className="content-panel">
              <div className="panel-icon">!</div>
              <h2>Notifications</h2>
              <p>You are all caught up. New updates about your reports will appear here.</p>
            </section>
          )}
          {activeSection === "settings" && (
            <section className="content-panel settings-panel">
              <div>
                <span className="eyebrow settings-eyebrow">ACCOUNT PREFERENCES</span>
                <h2>Settings</h2>
                <p>Manage your CampusFind preferences.</p>
              </div>
              <label className="settings-row">
                <span>
                  <strong>Dark mode</strong>
                  <small>Use a darker color scheme across CampusFind.</small>
                </span>
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={(event) => setDarkMode(event.target.checked)}
                />
              </label>
              <label className="settings-field">
                <span>Profile name</span>
                <input
                  value={profileName}
                  onChange={(event) => setProfileName(event.target.value)}
                  placeholder="Your name"
                />
              </label>
            </section>
          )}
        </main>

        <footer className="footer">
          <strong>CampusFind</strong>
          <p>Helping campus belongings find their way home.</p>
        </footer>
      </div>

      {showReportForm && (
        <ReportItem
          onAdd={handleAddItem}
          onClose={() => setShowReportForm(false)}
        />
      )}

      {editingItem && (
        <EditItem
          item={editingItem}
          onSave={handleUpdateItem}
          onClose={() => setEditingItem(null)}
        />
      )}

      {selectedItem && (
        <ItemDetails
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}