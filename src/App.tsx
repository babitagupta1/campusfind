// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import ItemCard from "./components/ItemCard";
// import { items } from "./data/items";
// import "./App.css";

// function App() {
//   const [search, setSearch] = useState("");
//   const [typeFilter, setTypeFilter] = useState("All");
//   const [categoryFilter, setCategoryFilter] = useState("All");

//   const categories: string[] = [
//   "All",
//   ...Array.from(
//     new Set(items.map((item) => item.category))
//   ),
// ];
//   const filteredItems = items.filter((item) => {
//     const matchesSearch =
//       item.title.toLowerCase().includes(search.toLowerCase()) ||
//       item.description.toLowerCase().includes(search.toLowerCase()) ||
//       item.location.toLowerCase().includes(search.toLowerCase());

//     const matchesType =
//       typeFilter === "All" || item.type === typeFilter;

//     const matchesCategory =
//       categoryFilter === "All" ||
//       item.category === categoryFilter;

//     return matchesSearch && matchesType && matchesCategory;
//   });

//   return (
//     <>
//       <Navbar />

//       <main className="container">
//         <section className="hero">
//           <span className="hero-label">
//             YOUR CAMPUS, CONNECTED
//           </span>

//           <h1>
//             Lost something?
//             <br />
//             <span>Let's find it.</span>
//           </h1>

//           <p>
//             Find lost belongings or help someone recover
//             what they have lost.
//           </p>
//         </section>

//         <section className="listing-section">
//           <div className="section-heading">
//             <div>
//               <h2>Lost & Found Items</h2>
//               <p>Browse items reported by students.</p>
//             </div>

//             <span className="result-count">
//               {filteredItems.length} items
//             </span>
//           </div>

//           <div className="filters">
//             <input
//               type="search"
//               placeholder="Search by item or location..."
//               value={search}
//               onChange={(event) => setSearch(event.target.value)}
//               aria-label="Search items"
//             />

//             <select
//               value={typeFilter}
//               onChange={(event) => setTypeFilter(event.target.value)}
//               aria-label="Filter by item type"
//             >
//               <option value="All">All Items</option>
//               <option value="Lost">Lost Items</option>
//               <option value="Found">Found Items</option>
//             </select>

//             <select
//               value={categoryFilter}
//               onChange={(event) =>
//                 setCategoryFilter(event.target.value)
//               }
//               aria-label="Filter by category"
//             >
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category === "All"
//                     ? "All Categories"
//                     : category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {filteredItems.length > 0 ? (
//             <div className="item-grid">
//               {filteredItems.map((item) => (
//                 <ItemCard key={item.id} item={item} />
//               ))}
//             </div>
//           ) : (
//             <div className="empty-state">
//               <h3>No items found</h3>

//               <p>
//                 Try another search term or change your filters.
//               </p>

//               <button
//                 onClick={() => {
//                   setSearch("");
//                   setTypeFilter("All");
//                   setCategoryFilter("All");
//                 }}
//               >
//                 Clear Filters
//               </button>
//             </div>
//           )}
//         </section>
//       </main>
//     </>
//   );
// }

// export default App;