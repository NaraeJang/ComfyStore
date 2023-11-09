import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="join-item btn btn-xs sm:btn-md"
          onClick={() => handlePageChange("prev")}>
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
          onClick={() => handlePageChange("next")}>
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
