import { useState } from "react";

import { APP_NAME } from "./constants/app";
import { useItems } from "./hooks/useItems";
import { useItemFilters } from "./hooks/useItemFilters";

import type { Item, ItemFormValues } from "./types/item";

import Navbar from "./components/Navbar";
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

  return (
    <div className="app" id="home">
      <Navbar onReportClick={() => setShowReportForm(true)} />

      <main className="main-content">
        <section className="hero">
          <span className="eyebrow">YOUR CAMPUS COMMUNITY</span>
          <h1>Lost something? <span>Find it here.</span></h1>
          <p>
            Report lost belongings, share found items, and help your
            campus community reconnect with what matters.
          </p>

          <button
            className="button button-primary hero-button"
            onClick={() => setShowReportForm(true)}
          >
            + Report an Item
          </button>
        </section>

        <ItemStats items={itemList} />

        <section className="browse-section">
          <div className="section-heading">
            <div>
              <h2>Campus items</h2>
              <p>Browse recent lost and found reports.</p>
            </div>

            <span className="result-count">
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "item" : "items"}
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

          {filteredItems.length === 0 ? (
            <EmptyState onClear={clearFilters} />
          ) : (
            <div className="items-grid">
              {filteredItems.map((item) => (
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
      </main>

      <footer className="footer">
        <strong>{APP_NAME}</strong>
        <p>Helping campus belongings find their way home.</p>
      </footer>

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