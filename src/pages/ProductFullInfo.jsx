// custome hooks
import useProduct from "../hooks/useProduct";
import { PrdouctsFullInfoSlider } from "../components/common/Sliders/index";
import Grid from "@mui/material/Unstable_Grid2";
import Loading from "../components/feddback/Loading/Loading";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";

const ProductFullInfo = () => {
  const { loading, error, productFullInfo } = useProduct();
  const dispatch = useDispatch();

  return (
    <Loading status={loading} error={error} type="product">
      <Grid container spacing={2}>
        <Grid xs={12} md={6} sx={{ mt: "50px" }}>
          <PrdouctsFullInfoSlider product={productFullInfo} />
        </Grid>
        <Grid xs={12} md={6} sx={{ mt: "50px", padding: "50px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: "100px",
            }}
          >
            <Typography>{productFullInfo.title} </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              Rated :
              <Rating
                name="half-rating-read"
                defaultValue={productFullInfo.rating}
                precision={0.5}
                readOnly
              />
            </Box>
            <Typography
              sx={{
                mt: "25px",
                color: "#dd2929",
                fontSize: "18px",
                fontWeight: "bold",
              }}
              variant="body2"
              color="text.secondary"
            >
              ${productFullInfo.price}
            </Typography>
            <Typography>Stock Available </Typography>
            <Button
              className="addToCartButton"
              onClick={() => dispatch(addToCart(productFullInfo))}
              sx={{
                bgcolor: "#1f2937",
                color: "#fff",
                width: "40%",
                margin: "15px 0",
              }}
            >
              Add To Cart
            </Button>
            <Typography>
              Category:{" "}
              <span
                style={{
                  mt: "25px",
                  color: "#dd2929",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {productFullInfo.category}
              </span>{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Loading>
  );
};

export default ProductFullInfo;
