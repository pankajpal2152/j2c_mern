import React from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
    const query = new URLSearchParams(useLocation().search).get("query");

    return (
        <div style={{ padding: "120px 20px" }}>
            <h1>Search Results</h1>
            <p>You searched for: <strong>{query}</strong></p>

            {/* You can load jobs / internships / courses based on query here */}
        </div>
    );
};

export default SearchPage;
