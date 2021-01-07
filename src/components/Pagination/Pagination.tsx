import React, { useState } from "react";
import { range } from "../../utilities/index";
import iconPrevious from "../../assets/images/angle-double-left-solid.svg";
import iconNext from "../../assets/images/angle-double-right-solid.svg";
import "./Pagination.scss";

const NAV_STEP: number = 1;

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
    <div className="pagination item-center d-flex">
      <div className="pagination-nav previous left">
        <button onClick={() => handleNavigation(-NAV_STEP)} className="btn-flat d-flex">
          <img src={iconPrevious} alt="previous icon" className="left" /> Previous
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
      <div className="pagination-nav next right">
        <button onClick={() => handleNavigation(NAV_STEP)} className="btn-flat">
          Next <img src={iconNext} alt="next icon" className="right"/>
        </button>
      </div>
    </div>
  );
};
