import React, { useEffect, useState } from 'react';
import DeshimulCard from './DeshimulCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";


import EmptyState from './EmptyState';
import { RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePagination } from '../../Hooks/usepagination';
import { DeshimulSkeletonGrid } from './DeshimulSkeleton';
import { useLocation } from 'react-router-dom';

const ITEMS_PER_PAGE = 15;

const Deshimul = () => {
  const [deshimul, setDeshimul] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/Mula.json");
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setDeshimul(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { 
    currentPage, 
    totalPages, 
    goToPage, 
    getItemsForCurrentPage 
  } = usePagination({
    totalItems: deshimul.length,
    itemsPerPage: ITEMS_PER_PAGE,
    initialPage: 1,
  });

  const currentItems = getItemsForCurrentPage(deshimul);

  const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const initialPage = parseInt(queryParams.get('page')) || 1;


  const handleRefresh = () => {
    fetchData();
  };


  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in duration-500">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Desimula Archive Version</h1>
       
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-muted-foreground">
          {deshimul.length > 0 ? (
            `Showing ${(currentPage - 1) * ITEMS_PER_PAGE + 1}-${
              Math.min(currentPage * ITEMS_PER_PAGE, deshimul.length)
            } of ${deshimul.length} items`
          ) : (
            loading ? "Loading items..." : "No items found"
          )}
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleRefresh}
          disabled={loading}
          className="flex items-center gap-1"
        >
          <RefreshCcw className="h-4 w-4" />
          <span>Refresh</span>
        </Button>
      </div>

      {loading ? (
        <DeshimulSkeletonGrid />
      ) : deshimul.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {currentItems.map((item) => (
              <div key={item.guid} className="transform transition-transform duration-300 hover:-translate-y-1">
                <DeshimulCard item={item} />
              </div>
            ))}
          </div>
          
         {totalPages > 1 && (
  <div className="mt-8">
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => goToPage(currentPage - 1)}
              className="cursor-pointer"
            >
              Previous
            </PaginationLink>
          </PaginationItem>
        )}

        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              isActive={currentPage === index + 1}
              onClick={() => goToPage(index + 1)}
              className="cursor-pointer"
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink
              onClick={() => goToPage(currentPage + 1)}
              className="cursor-pointer"
            >
              Next
            </PaginationLink>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  </div>
)}

        </>
      ) : (
        <EmptyState message="No market insights available at the moment." />
      )}
    </div>
  );
};

export default Deshimul;