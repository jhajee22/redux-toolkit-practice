function Filter({ searchTerm, onSearchChange, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder || "Search..."}
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default Filter;
