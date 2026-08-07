import { useState } from "react";
import "./CompanySearch.css";

export default function CompanySearch({ onSearch }) {

  const [value, setValue] = useState("");

  function handleChange(e) {

    const keyword = e.target.value;

    setValue(keyword);

    if (onSearch) {
      onSearch(keyword);
    }

  }

  return (

    <div className="company-search">

      <input
        type="text"
        placeholder="Search company, owner, email or phone..."
        className="company-search-input"
        value={value}
        onChange={handleChange}
      />

    </div>

  );

}
