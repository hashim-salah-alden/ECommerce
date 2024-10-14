// custome hooks
import Grid from "@mui/material/Unstable_Grid2";
import Loading from "../components/feddback/Loading/Loading";
import ProductsFullInfo from "../components/eCommerce/products/ProductsFullInfo";

import useProduct from "../hooks/useProduct";

const ProductFullInfo = () => {
  const { loading, error, productFullInfo } = useProduct();

  return (
    <Loading status={loading} error={error} type="product">
      <Grid container spacing={2}>
        <ProductsFullInfo productFullInfo={productFullInfo} />
      </Grid>
    </Loading>
  );
};

export default ProductFullInfo;
