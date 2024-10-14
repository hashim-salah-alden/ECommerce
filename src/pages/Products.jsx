/* eslint-disable no-unused-vars */
import Loading from "../components/feddback/Loading/Loading";
import ProductCard from "../components/eCommerce/products/ProductCard";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


// custome hooks
import useProducts from "../hooks/useProducts";

const Products = () => {
  const params = useParams();


  const { loading, error, itemsFullInfo } = useProducts(params.url);
  const { cartError } = useSelector((state) => state.cart);


  return (
    <Loading status={loading} error={error} type="product">
      <Grid sx={{ mb: { xs: "100px" } }} container spacing={2}>
        {itemsFullInfo?.map((product) => {
          {
            return <ProductCard product={product} cartError={cartError} />;
          }
        })}
      </Grid>
    </Loading>
  );
};

export default Products;
