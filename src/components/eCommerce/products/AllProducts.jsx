/* eslint-disable react/prop-types */
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

import ProductCard from "../../eCommerce/products/ProductCard";
import PaginationOutlined from "../../common/Pagination";

const AllProducts = ({
  allProductsSection,
  handleScroll,
  products,
  totalPages,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "150px",
        width: "100%",
      }}
    >
      <Grid
        ref={allProductsSection}
        sx={{ mb: { xs: "100px" } }}
        container
        spacing={2}
      >
        {products.map((product) => {
          {
            return <ProductCard product={product} />;
          }
        })}
      </Grid>

      <PaginationOutlined
        handleScroll={handleScroll}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Box>
  );
};

export default AllProducts;
