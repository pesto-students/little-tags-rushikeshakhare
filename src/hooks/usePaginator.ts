import { useState, useEffect } from "react";

export const usePaginator = (dataArray: any[], pageSize: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const getTotalPages = () => {
    let totalPages = dataArray.length / pageSize;
    if (dataArray.length % pageSize) totalPages += 1;
    return totalPages;
  };
  const [totalPages, setTotalPages] = useState(getTotalPages);
  const getCurrentPageRecords = () => {
    if (!dataArray) return [];
    return dataArray.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
  };

  const [currentRecords, setCurrentRecords] = useState(getCurrentPageRecords);

  useEffect(() => {
    setCurrentRecords(getCurrentPageRecords());
  }, [currentPage]);

  useEffect(() => {
    setTotalPages(getTotalPages());
    setCurrentRecords(getCurrentPageRecords());
  }, [JSON.stringify(dataArray)]);

  return { currentRecords, setCurrentPage, currentPage, totalPages };
};
