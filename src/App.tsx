import { useState } from "react";
import Navbar from "./components/Navbar";
import ItemCard from "./components/ItemCard";
import ReportItem from "./components/ReportItem";
import { items } from "./data/item";
import "./App.css";
import type { Item } from "./types/item";

function App() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [showReportForm, setShowReportForm] = useState(false);

  const [itemList, setItemList] = useState(items);

  const filteredItems = itemList.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      typeFilter === "All" || item.type === typeFilter;

    const matchesCategory =
      categoryFilter === "All" ||
      item.category === categoryFilter;

    return (
      matchesSearch &&
      matchesType &&
      matchesCategory
    );
  });

  const clearFilters = () => {
    setSearch("");
    setTypeFilter("All");
    setCategoryFilter("All");
  };

  const handleAddItem = (newItem: Item) => {
    setItemList((prevItems) => [newItem, ...prevItems]);
    setShowReportForm(false);
  };

  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div>
            <p className="hero-label">
              CAMPUS LOST & FOUND
            </p>

            <h1>
              Find What You Lost.
              <br />
              Help Others Find Theirs.
            </h1>

            <p>
              A simple way for students to report,
              search, and recover lost items on campus.
            </p>

            <a href="#items" className="hero-button">
              Browse Items
            </a>

            <button
              className="report-button"
              onClick={() => setShowReportForm(true)}
            >
              + Report an Item
            </button>
          </div>
        </section>

        {/* ITEMS SECTION */}
        <section className="listing-section" id="items">
          <div className="section-heading">
            <div>
              <p className="section-label">
                CAMPUS ITEMS
              </p>

              <h2>
                Browse Lost & Found Items
              </h2>
            </div>

            <p>
              {filteredItems.length} item
              {filteredItems.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* FILTERS */}
          <div className="filters">
            <input
              type="text"
              placeholder="Search by item or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(e.target.value)
              }
            >
              <option value="All">All Types</option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) =>
                setCategoryFilter(e.target.value)
              }
            >
              <option value="All">All Categories</option>
              <option value="Personal">Personal</option>
              <option value="Accessories">
                Accessories
              </option>
              <option value="Documents">Documents</option>
              <option value="Bags">Bags</option>
              <option value="Electronics">
                Electronics
              </option>
              <option value="Stationery">
                Stationery
              </option>
            </select>

            {(search ||
              typeFilter !== "All" ||
              categoryFilter !== "All") && (
              <button
                className="clear-button"
                onClick={clearFilters}
              >
                Clear
              </button>
            )}
          </div>

          {/* ITEM LIST */}
          {filteredItems.length > 0 ? (
            <div className="item-grid">
              {filteredItems.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  onViewDetails={setSelectedItem}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No items found</h3>

              <p>
                Try changing your search or filters.
              </p>

              <button onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* ITEM DETAILS MODAL */}
        {selectedItem && (
          <div className="details-overlay">
            <div className="details-modal">
              <button
                className="close-button"
                onClick={() => setSelectedItem(null)}
                type="button"
              >
                ×
              </button>

              <p className="section-label">
                ITEM DETAILS
              </p>

              <div
                className={`item-badge ${selectedItem.type.toLowerCase()}`}
              >
                {selectedItem.type}
              </div>

              <h2>{selectedItem.title}</h2>

              <p className="details-description">
                {selectedItem.description}
              </p>

              <div className="details-info">
                <p>
                  <strong>Category:</strong>{" "}
                  {selectedItem.category}
                </p>

                <p>
                  <strong>Location:</strong>{" "}
                  {selectedItem.location}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {selectedItem.type}
                </p>
              </div>

              <button
                className="claim-button"
                onClick={() =>
                  alert(
                    `Claim request for ${selectedItem.title} will be added later.`
                  )
                }
                type="button"
              >
                I Found This Item
              </button>
            </div>
          </div>
        )}

        {/* REPORT ITEM MODAL */}
        {showReportForm && (
          <ReportItem
            onSubmitItem={handleAddItem}
            onClose={() => setShowReportForm(false)}
          />
        )}
      </main>
    </>
  );
}

export default App;