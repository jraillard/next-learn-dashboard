"use client";

import { useState } from "react";
import Pagination from "./pagination";
import Table from "./table";

interface TableWrapperProps {
  query: string;
  currentPage: number;
}

export default function TableWrapper({
  query,
  currentPage,
}: Readonly<TableWrapperProps>) {
  const [totalPages, setTotalPages] = useState(0);

  return (
    <>
      <Table
        query={query}
        currentPage={currentPage}
        onTotalPagesUpdate={setTotalPages}
      />
      {totalPages > 0 && (
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </>
  );
}
