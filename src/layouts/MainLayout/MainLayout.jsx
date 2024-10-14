import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer/Footer";

// components
import { Header } from "../../components/common/index";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
