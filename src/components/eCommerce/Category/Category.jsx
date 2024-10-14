/* eslint-disable react/prop-types */
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

// css
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const { categoryCard, linkStyle } = styles;

const Category = ({ slug, name, categoryImg }) => {
  return (
    <>
      <Grid xs={6} md={3}>
        <Link
          to={`/categories/products/${slug}`}
          className={`${categoryCard} ${linkStyle}`}
          sx={{}}
        >
          <Avatar
            alt="Temy Sharp"
            sx={{ width:{xs:"180px",md:"250px"} , height: {xs:"180px",md:"250px"}, margin: "10px 0", bgcolor: "#fff" }}
            src={`categoriesImgs/${categoryImg}.png`}
          />
          <Typography
            sx={{
              bgcolor: "#1f2937",
              color: "#fff",
              padding: "5px",
              borderRadius: "5px",
              mt: "10px",
              minWidth: "150px",
              textAlign: "center",
            }}
          >
            {name}
          </Typography>
        </Link>
      </Grid>
    </>
  );
};

export default Category;
