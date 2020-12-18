import * as React from "react";
import { useState, useEffect } from "react";
import searchIcon from "../../assets/images/search.svg";
import "./search.scss";

interface ISearchProps {
  searchResults: any[];
  onSearch: any;
}

export const Search = ({ searchResults, onSearch }: ISearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    setShowSearchResults(true);
  }, [searchResults]);

  return (
    <div className="search">
      <div className="search-input d-flex">
        <img src={searchIcon} alt="Search Icon" />
        <input
          type="text"
          className="input-control"
          placeholder="Search..."
          onChange={(e: any) => {
            onSearch(e);
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
        />
      </div>
      {showSearchResults && searchResults && (
        <div className="search-results">
          {searchResults.length ? (
            <>
              <div className="results">
                {searchResults.map((searchResult: string, index: number) => (
                  <button
                    className="btn search-results-item"
                    key={index}
                    onClick={() => {
                      setSearchQuery(searchResult);
                      setShowSearchResults(false);
                    }}
                  >
                    <h5>{searchResult}</h5>
                    <h6>Category {index}</h6>
                  </button>
                ))}
              </div>
              <div className="results-all d-flex">
                <button className="btn">View All Results</button>
              </div>
            </>
          ) : (
            searchQuery && <div className="no-results">No Results Found</div>
          )}
        </div>
      )}
    </div>
  );
};
