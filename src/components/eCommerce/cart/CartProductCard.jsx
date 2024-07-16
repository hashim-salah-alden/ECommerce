/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Delete from "@mui/icons-material/Delete";
import {
  changeQuantity,
  deleteFromCart,
} from "../../../store/cart/cartSlice.js";
import { useDispatch } from "react-redux";
import { pink } from "@mui/material/colors";

const CartProductCard = ({ cartProduct }) => {
  const dispatch = useDispatch();
  const productQuantity = cartProduct.quantity;
  const maxUnits = Array(cartProduct.maxUnits)
    .fill(0)
    .map((_, idx) =>
      ++idx === productQuantity ? (
        <option key={idx} value={idx} selected>
          {idx}
        </option>
      ) : (
        <option key={idx} value={idx}>
          {idx}
        </option>
      )
    );

  return (
    <>
      <Grid md={3} sx={{ mb: "25px",display:"flex",justifyContent:"center",alignItems:"center" }}>
        <img
          src={`${cartProduct.images[0]}`}
          style={{ width: "100px", height: "100px", backgroundColor: "#fff" }}
          alt=""
        />
      </Grid>
      <Grid md={6} sx={{ mb: "25px", flexGrow: "1" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
            gap: 2,
          }}
        >
          <Typography sx={{ fontWeight: "200" }}>
            {" "}
            {cartProduct.category}
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            {" "}
            {cartProduct.title}
          </Typography>

          <select
            style={{ width: "120px", backgroundColor: "#1f2937" }}
            onChange={(e) =>
              dispatch(
                changeQuantity({
                  payload: cartProduct,
                  selectedQuantity: e.target.value,
                })
              )
            }
          >
            {maxUnits}
          </select>

          <Delete
            sx={{ color: pink[500] }}
            onClick={() => dispatch(deleteFromCart(cartProduct.id))}
          />
        </Box>
      </Grid>
      <Grid md={3} sx={{ mb: "25px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Typography
            sx={{ color: "#dd2929", fontSize: "17px", fontWeight: "bold" }}
          >
            {cartProduct.price}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default CartProductCard;
