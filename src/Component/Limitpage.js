import React, { useState } from 'react';

function Limitpage() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const data = [/* your array of data */];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (event) => {
    setPage(Number(event.target.value));
  };

  const startIndex = (page - 1) * itemsPerPage;
  const displayedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {displayedData.map((item) => (
        // render your data here
        <div></div>
      ))}
      {totalPages > 1 && (
        <div>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
          <select value={page} onChange={handlePageChange}>
            {Array.from({ length: totalPages }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                Page {i + 1}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default Limitpage;
