import * as React from "react";
import { useState, useEffect } from "react";
import { SEARCH_NO_RESULTS_TEXT, SEARCH_PLACEHOLDER } from "../../AppConstants";
import searchIcon from "../../assets/images/search.svg";
import "./search.scss";

interface ISearchProps {
  searchResults: any[];
  onSearch: any;
  searchInProgress: any;
  onSearchOptionClick: (id: number) => void;
}

export const Search = ({
  searchResults,
  onSearch,
  searchInProgress,
  onSearchOptionClick,
}: ISearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    if (searchInProgress) setShowSearchResults(true);
  }, [searchResults, searchInProgress]);

  return (
    <div className="search">
      <div className="search-input d-flex">
        <img src={searchIcon} alt="Search Icon" />
        <input
          type="text"
          className="input-control"
          placeholder={SEARCH_PLACEHOLDER}
          onChange={(e: any) => {
            onSearch(e);
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
        />
      </div>
      {!searchInProgress && showSearchResults && searchQuery && (
        <div className="search-results">
          {searchResults.length ? (
            <>
              <div className="results">
                {searchResults.map(
                  ({ title, category, id }: any, index: number) => (
                    <button
                      className="btn search-results-item"
                      key={index}
                      onClick={() => {
                        onSearchOptionClick(id);
                        setShowSearchResults(false);
                      }}
                    >
                      <h5>{title}</h5>
                      <h6>{category}</h6>
                    </button>
                  )
                )}
              </div>
            </>
          ) : (
            searchQuery && (
              <div className="no-results">{SEARCH_NO_RESULTS_TEXT}</div>
            )
          )}
        </div>
      )}
    </div>
  );
};
