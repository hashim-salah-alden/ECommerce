/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box } from "@mui/material";
import { HeroSlider, ProductsSlider } from "../components/common/Sliders/index";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// custome hooks
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";

const Home = () => {
  const { getRandomCategory, loading } = useCategories();
  const firstRandomCategory = getRandomCategory();
  const secondRandomCategory = getRandomCategory();

  const { itemsFullInfo } = useProducts(
    firstRandomCategory?.slug || "mens-watches"
  );

  return (
    // hero section
    <Box
      sx={{
        display: "flex",
        alignContent: "flex-start",
        flexWrap: "wrap",
        flexDirection: "row-reverse",
      }}
    >
      {/* hero slider */}
      <Box
        sx={{
          width: { xs: "100%", md: "75%" },
        }}
      >
        <HeroSlider />
      </Box>
      <Box
        sx={{
          margin: "25px 15px 0 0",
          width: { xs: "100%", md: `calc(25% - 15px)` },
        }}
      >
        {/* first random category */}
        <Paper
          sx={{
            backgroundImage: `url(slider/bannerone.jpg)`,
            padding: "25px",
            height: "250px",
            mb: "15px",
          }}
        >
          <span
            style={{
              color: "#D23F57",
              fontSize: "24px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {firstRandomCategory?.slug}
          </span>
          <Typography
            sx={{
              width: "250px",
              margin: "10px 0 0",
              textTransform: "capitalize",
              fontSize: "18px",
            }}
            variant="p"
            component="h2"
          >
            sale up to <span style={{ color: "#D23F57" }}>30% off</span>
          </Typography>
          <Link to={`/categories/products/${firstRandomCategory?.slug}`}>
            <Button
              sx={{
                margin: "15px 0",
                color: "#1f2937",
                borderColor: "#1f2937",
              }}
              variant="outlined"
            >
              Shop Now
            </Button>
          </Link>
        </Paper>
        {/* second random category */}
        <Paper
          sx={{
            padding: "25px",
            height: "250px",
            backgroundImage: `url(slider/bannetwo.jpg)`,
          }}
        >
          <span
            style={{
              color: "#D23F57",
              fontSize: "24px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {secondRandomCategory?.slug}
          </span>
          <Typography
            sx={{
              width: "250px",
              margin: "10px 0 0",
              textTransform: "capitalize",
              fontSize: "18px",
            }}
            variant="p"
            component="h2"
          >
            sale up to <span style={{ color: "#D23F57" }}>30% off</span>
          </Typography>
          <Link to={`/categories/products/${secondRandomCategory?.slug}`}>
            <Button
              sx={{
                margin: "15px 0",
                color: "#1f2937",
                borderColor: "#1f2937",
              }}
              variant="outlined"
            >
              Shop Now
            </Button>
          </Link>
        </Paper>
      </Box>
      {/* product slider */}

      <ProductsSlider itemsFullInfo={itemsFullInfo} />
    </Box>
  );
};

export default Home;
