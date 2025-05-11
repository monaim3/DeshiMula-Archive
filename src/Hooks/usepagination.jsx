import { useState, useMemo } from 'react';

export const usePagination = ({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage]);
  
  const pageNumbers = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getItemsForCurrentPage = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    getItemsForCurrentPage,
    pageNumbers,
  };
};