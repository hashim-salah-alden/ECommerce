import Grid from "@mui/material/Unstable_Grid2";
import Loading from "../components/feddback/Loading/Loading";
import CartProductCard from "../components/eCommerce/cart/CartProductCard";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const Cart = () => {
  const { loading, error, cartProducts } = useSelector((state) => state.cart);

  const subTotal = cartProducts.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  if (cartProducts.length > 0) {
    return (
      <Loading status={loading} error={error} type="product">
        {cartProducts?.map((cartProduct) => {
          {
            return (
              <Grid
                container
                spacing={2}
                sx={{
                  width: { sm: "100%", md: "60%" },
                  mt: "25px",
                  padding: "5px",
                  bgcolor: "#fff",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  fontWeight: "bold",
                  flexWrap: "nowrap",
                }}
              >
                <CartProductCard cartProduct={cartProduct} />
              </Grid>
            );
          }
        })}
        <Box
          sx={{
            width: "20%",
            bgcolor: "#1f2937",
            padding: "15px",
            color: "#fff",
            mt: "15px",
            mb: "100px",
            borderRadius: "5px",
          }}
        >
          <Typography>{subTotal.toFixed(2)}</Typography>
        </Box>
      </Loading>
    );
  }
};

export default Cart;
