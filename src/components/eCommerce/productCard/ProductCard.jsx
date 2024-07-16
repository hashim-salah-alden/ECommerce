/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { addToCart } from "../../../store/cart/cartSlice";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const { addToCartButton, showDetailsButton } = styles;

const ProductCard = memo(({ product, smallCard = false }) => {
  const dispatch = useDispatch();
  if (product) {
    return (
      <Grid lg={3} xs={6} sx={{ mt: smallCard ? "10px" : "25px" }}>
        <Card
          sx={{
            minHeight: smallCard ? "300px" : "400px",
            maxHeight: smallCard ? "400px" : "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: smallCard ? "flex-start" : "space-around",
            padding: "10px 0",
            minWidth: "180px",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image={product.images[0]}
            sx={{
              width: smallCard ? "125px" : "200px",
              height: smallCard ? "125px" : "200px",
              alignSelf: "center",
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "400", fontSize: "15px" }}
            >
              {product.title}
            </Typography>

            <Typography
              sx={{
                mt: smallCard ? "10px" : "25px",
                color: "#dd2929",
                fontSize: "15px",
                fontWeight: "bold",
              }}
              variant="body2"
              color="text.secondary"
            >
              {product.price}
            </Typography>
            <Typography
              sx={{
                mt: smallCard ? "10px" : "25px",
                color: "#dd2929",
                fontSize: "15px",
                fontWeight: "bold",
              }}
              variant="body2"
              color="text.secondary"
            >
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={product.rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              className="addToCartButton"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </Button>
            <Link className="showDetailsButton" to={`/productId/${product.id}`}>
              <Button sx={{ color: "#fff" }}>show Details</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    );
  }
});

export default ProductCard;
