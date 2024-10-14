/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled({
  handleScroll,
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  const handleChange = (event, value) => {
    handleScroll();
    setCurrentPage(value - 1);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(totalPages / 16)}
        page={currentPage + 1}
        onChange={handleChange}
      />
    </Stack>
  );
}
