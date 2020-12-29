import React, { useState } from "react";
import { range } from "../../utilities/index";
import "./Pagination.scss";

interface IPagination {
  totalPages: number;
  navigationSize?: number;
  onPageSelected: (page: number) => void;
}
export const Pagination = ({
  totalPages,
  onPageSelected,
  navigationSize = 4,
}: IPagination) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const handleNavigation = (delta: number) => {
    if (offset + delta < 0 || offset + navigationSize + delta > totalPages)
      return;
    setOffset(offset + delta);
  };

  const handlePageSelect = (page: number) => {
    setSelectedPage(page);
    onPageSelected(page);
  };

  return (
    <div className="pagination item-center">
      <div className="pagination-nav previous left">
        <button onClick={() => handleNavigation(-1)} className="btn-flat">
          {"<<"} Previous
        </button>
      </div>
      <div className="pagination-nav next right">
        <button onClick={() => handleNavigation(1)} className="btn-flat">
          Next {">>"}
        </button>
      </div>
      <ul className="pagination-list text-center">
        {range(navigationSize).map((page, index) => (
          <li key={index} className="pagination-list-item">
            <button
              onClick={() => handlePageSelect(page + offset + 1)}
              className={`btn-flat ${
                selectedPage === page + offset + 1 ? "selected" : ""
              }`}
            >
              {page + offset + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
