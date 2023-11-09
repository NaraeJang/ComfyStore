import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="join-item btn btn-xs sm:btn-md"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}>
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`join-item btn btn-xs sm:btn-md border-none ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}>
              {pageNumber}
            </button>
          );
        })}
        <button
          className="join-item btn btn-xs sm:btn-md"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}>
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
