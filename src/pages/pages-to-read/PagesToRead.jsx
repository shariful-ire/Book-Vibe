import React, { useEffect, useState } from "react";

const PagesToRead = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // =====================================================
  // Fetch Books Data
  // =====================================================

  useEffect(() => {
    fetch("/data/booksData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch books data");
        }

        return response.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // =====================================================
  // Loading
  // =====================================================

  if (loading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-500"></span>
      </div>
    );
  }

  // =====================================================
  // No Books
  // =====================================================

  if (books.length === 0) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-600">
          No books found
        </h2>
      </div>
    );
  }

  // =====================================================
  // Graph Settings
  // =====================================================

  const graphWidth = 1000;
  const graphHeight = 500;

  const paddingLeft = 75;
  const paddingRight = 40;
  const paddingTop = 50;
  const paddingBottom = 95;

  const chartWidth =
    graphWidth - paddingLeft - paddingRight;

  const chartHeight =
    graphHeight - paddingTop - paddingBottom;

  // Find maximum pages
  const maxPages = Math.max(
    ...books.map((book) => Number(book.totalPages) || 0)
  );

  // Round maximum value for Y axis
  const yMax = Math.ceil(maxPages / 50) * 50;

  // =====================================================
  // Colors
  // =====================================================

  const graphColors = [
    "#1683ed",
    "#00b894",
    "#ffb526",
    "#ff7545",
    "#ff0000",
    "#8b5cf6",
    "#ec4899",
    "#14b8a6",
  ];

  // =====================================================
  // Y Axis
  // =====================================================

  const ySteps = 4;

  const yAxisValues = Array.from(
    { length: ySteps + 1 },
    (_, index) => {
      return Math.round((yMax / ySteps) * index);
    }
  ).reverse();

  // =====================================================
  // Create graph points
  // =====================================================

  const spacing =
    chartWidth / Math.max(books.length, 1);

  // =====================================================
  // Create smooth peak path
  // =====================================================

  const createPeakPath = (x, peakY, baseY) => {
    const peakWidth = 24;

    const leftX = x - peakWidth;
    const rightX = x + peakWidth;

    const controlLeft = x - 18;
    const controlRight = x + 18;

    return `
      M ${leftX} ${baseY}
      C ${leftX + 15} ${baseY},
        ${controlLeft} ${peakY + 45},
        ${x} ${peakY}
      C ${controlRight} ${peakY + 45},
        ${rightX - 15} ${baseY},
        ${rightX} ${baseY}
      Z
    `;
  };

  // =====================================================
  // Main UI
  // =====================================================

  return (
    <section className="min-h-screen py-8 md:py-10">

      {/* =================================================
          GRAPH CONTAINER
      ================================================= */}

      <div className="rounded-2xl bg-gray-50 p-4 shadow-sm md:p-8">

        {/* =================================================
            SVG GRAPH
        ================================================= */}

        <div className="w-full overflow-x-auto">

          <svg
            viewBox={`0 0 ${graphWidth} ${graphHeight}`}
            className="mx-auto block min-w-[750px] w-full max-w-5xl"
          >

            {/* =================================================
                DEFINITIONS
            ================================================= */}

            <defs>
              {books.map((book, index) => (
                <linearGradient
                  key={`gradient-${book.bookId}`}
                  id={`gradient-${book.bookId}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={graphColors[index % graphColors.length]}
                    stopOpacity="0.95"
                  />

                  <stop
                    offset="100%"
                    stopColor={graphColors[index % graphColors.length]}
                    stopOpacity="0.75"
                  />
                </linearGradient>
              ))}
            </defs>

            {/* =================================================
                HORIZONTAL GRID LINES
            ================================================= */}

            {yAxisValues.map((value, index) => {

              const y =
                paddingTop +
                (index / ySteps) * chartHeight;

              return (
                <g key={`grid-${value}`}>

                  {/* Grid line */}

                  <line
                    x1={paddingLeft}
                    x2={graphWidth - paddingRight}
                    y1={y}
                    y2={y}
                    stroke="#d9d9d9"
                    strokeDasharray="4 4"
                  />

                  {/* Y value */}

                  <text
                    x={paddingLeft - 15}
                    y={y + 5}
                    textAnchor="end"
                    fontSize="13"
                    fill="#999"
                  >
                    {value}
                  </text>

                </g>
              );
            })}

            {/* =================================================
                BOOK PEAKS
            ================================================= */}

            {books.map((book, index) => {

              const pages = Number(book.totalPages) || 0;

              const x =
                paddingLeft +
                spacing * index +
                spacing / 2;

              const baseY =
                paddingTop + chartHeight;

              const peakY =
                baseY -
                (pages / yMax) * chartHeight;

              const path = createPeakPath(
                x,
                peakY,
                baseY
              );

              return (
                <g key={book.bookId}>

                  {/* =================================================
                      PEAK
                  ================================================= */}

                  <path
                    d={path}
                    fill={`url(#gradient-${book.bookId})`}
                  />

                  {/* =================================================
                      PAGE NUMBER
                  ================================================= */}

                  <text
                    x={x}
                    y={peakY - 12}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill={graphColors[index % graphColors.length]}
                  >
                    {pages}
                  </text>

                  {/* =================================================
                      BOOK NAME
                  ================================================= */}

                  <text
                    x={x}
                    y={baseY + 28}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#888"
                  >
                    {book.bookName.length > 18
                      ? `${book.bookName.substring(0, 18)}...`
                      : book.bookName}
                  </text>

                </g>
              );
            })}

          </svg>

        </div>

      </div>

    </section>
  );
};

export default PagesToRead;