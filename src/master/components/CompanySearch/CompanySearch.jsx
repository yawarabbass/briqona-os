import { useState } from "react";
import "./CompanySearch.css";

export default function CompanySearch({ onSearch }) {

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {

    const value = e.target.value;

    setSearch(value);

    if (onSearch) {

      onSearch(value);

    }

  };

  return (

    <div className="company-search">

      <input
        type="text"
        className="company-search-input"
        placeholder="Search company, owner, email or phone..."
        value={search}
        onChange={handleSearch}
      />

    </div>

  );

}
