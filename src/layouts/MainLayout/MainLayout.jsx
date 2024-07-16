import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Footer from "../../components/common/Footer/Footer";

// components
import { Header } from "../../components/common/index";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <Box sx={{display:"flex",flexDirection:"column"}}>
      <Header />
      <Container maxWidth="xl" >
        <Outlet />
      </Container>
      <Footer/>
    </Box>
  );
};

export default MainLayout;
