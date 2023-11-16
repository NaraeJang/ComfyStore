import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`join-item btn btn-xs sm:btn-md border-none ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}>
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    // first page
    if (page === 1) {
      pageButtons.push(
        addPageButton({ pageNumber: 2, activeClass: page === 2 })
      );
      pageButtons.push(
        addPageButton({ pageNumber: 3, activeClass: page === 3 })
      );
    }

    if (page > 3) {
      // first dots
      pageButtons.push(
        <button key="dots-1" className="join-item btn btn-xs sm:btn-md">
          ...
        </button>
      );
    }

    if (page !== 1 && page !== pageCount) {
      // active/current button - 1
      if (page > 2) {
        pageButtons.push(
          addPageButton({ pageNumber: page - 1, activeClass: true })
        );
      }
      // active/current button
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }
    // active/current button + 1
    if (page < pageCount - 1 && page > 1) {
      pageButtons.push(
        addPageButton({ pageNumber: page + 1, activeClass: true })
      );
    }

    if (page < pageCount - 2) {
      // last dots
      pageButtons.push(
        <button key="dots-2" className="join-item btn btn-xs sm:btn-md">
          ...
        </button>
      );
    }
    if (page === pageCount) {
      pageButtons.push(
        addPageButton({
          pageNumber: pageCount - 2,
          activeClass: page === pageCount - 2,
        })
      );
      pageButtons.push(
        addPageButton({
          pageNumber: pageCount - 1,
          activeClass: page === pageCount - 1,
        })
      );
    }

    // last button
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );

    return pageButtons;
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
        {renderPageButtons()}
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
export default ComplexPaginationContainer;
