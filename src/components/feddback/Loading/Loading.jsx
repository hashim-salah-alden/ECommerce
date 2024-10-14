/* eslint-disable react/prop-types */
import LottieHandler from "../LottieHandler/LottieHandler";
import Skeletons from "../skeletons/Skeletons";

import Container from "@mui/material/Container";

const Loading = ({ status, error, children, type }) => {
  if (status === "pending") {
    return <Skeletons skeletonType={type} />;
  }
  if (status === "failed") {
    return <LottieHandler type="error" message={error} />;
  }

  return <Container maxWidth="xl" sx={{minHeight:"100vh"}}>{children}</Container>;
};

export default Loading;
