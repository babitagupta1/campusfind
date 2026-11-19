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
import ConfirmDialog from "./components/ConfirmDialog";

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
  const [deletingItem, setDeletingItem] = useState<Item | null>(null);
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

  function handleUpdateItem(values: ItemFormValues) {
    if (!editingItem) return;

    updateItem(editingItem.id, values);
    setEditingItem(null);
  }

  function handleDeleteItem(id: number) {
    const item = itemList.find((currentItem) => currentItem.id === id);
    if (item) setDeletingItem(item);
  }

  function confirmDeleteItem() {
    if (!deletingItem) return;

    deleteItem(deletingItem.id);

    if (selectedItem?.id === deletingItem.id) {
      setSelectedItem(null);
    }

    if (editingItem?.id === deletingItem.id) {
      setEditingItem(null);
    }

    setDeletingItem(null);
  }

  function handleEditItem(item: Item) {
    setSelectedItem(null);
    setEditingItem(item);
  }

  function renderItemsSection(title: string, description: string, items = filteredItems) {
    return (
      <section className="mb-5">
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-3">
          <div>
            <h2 className="h4 mb-1">{title}</h2>
            <p className="text-secondary mb-0">{description}</p>
          </div>
          <span className="badge text-bg-light">
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
          <div className="row g-3">
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
    <div
      className={`app ${darkMode ? "dark-mode" : ""}`}
      data-bs-theme={darkMode ? "dark" : "light"}
      id="home"
    >
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
              <section className="card border-0 bg-primary-subtle mb-4" id="dashboard">
                <div className="hero-copy">
                  <div className="card-body p-4 p-md-5">
                  <span className="badge text-bg-light mb-3">YOUR CAMPUS COMMUNITY</span>
                  <h2 className="display-6 fw-bold">Lost something? <span className="text-primary">Find it here.</span></h2>
                  <p className="lead text-secondary">
                    Report lost belongings, share found items, and help your
                    campus community reconnect with what matters.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setShowReportForm(true)}
                  >
                    + Report an item
                  </button>
                  </div>
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
            <section className="card text-center p-5">
              <div className="display-6 text-primary">!</div>
              <h2 className="h4">Notifications</h2>
              <p className="text-secondary">You are all caught up. New updates about your reports will appear here.</p>
            </section>
          )}
          {activeSection === "settings" && (
            <section className="card p-4">
              <div>
                <span className="badge text-bg-light mb-2">ACCOUNT PREFERENCES</span>
                <h2 className="h4">Settings</h2>
                <p className="text-secondary">Manage your CampusFind preferences.</p>
              </div>
              <label className="form-check form-switch border-top border-bottom py-3 d-flex justify-content-between">
                <span>
                  <strong className="d-block">Dark mode</strong>
                  <small className="text-secondary">Use a darker color scheme across CampusFind.</small>
                </span>
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={(event) => setDarkMode(event.target.checked)}
                />
              </label>
              <label className="form-label mt-3">
                <span className="d-block mb-1">Profile name</span>
                <input className="form-control"
                  value={profileName}
                  onChange={(event) => setProfileName(event.target.value)}
                  placeholder="Your name"
                />
              </label>
            </section>
          )}
        </main>

        <footer className="border-top text-secondary py-4 px-4">
          <strong>CampusFind</strong>
          <p className="mb-0">Helping campus belongings find their way home.</p>
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

      {deletingItem && (
        <ConfirmDialog
          itemTitle={deletingItem.title}
          onConfirm={confirmDeleteItem}
          onClose={() => setDeletingItem(null)}
        />
      )}
    </div>
  );
}