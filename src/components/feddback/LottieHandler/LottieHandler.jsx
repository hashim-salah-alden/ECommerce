/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import notFound from "../../../assets/lottieFiles/notFound.json";
import empty from "../../../assets/lottieFiles/empty.json";
import loading from "../../../assets/lottieFiles/loading.json";
import error from "../../../assets/lottieFiles/error.json";
import { Box } from "@mui/material";

const lottieTypeMap = {
  notFound,
  empty,
  loading,
  error,
};

const LottieHandler = ({ type, message }) => {
  const lottie = lottieTypeMap[type];
  const messageStyle =
    type === "error"
      ? { fontSize: "19px", color: "red" }
      : { fontSize: "19px", marginTop: "30px" };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Lottie animationData={lottie} style={{ width: "400px" }} />
      {message && <h3 style={messageStyle}>{message}</h3>}
    </Box>
  );
};

export default LottieHandler;
