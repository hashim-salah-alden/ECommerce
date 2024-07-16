/* eslint-disable react/prop-types */
import ContentLoader from "react-content-loader";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./styles.module.css";

const productSkeleton = Array(8)
  .fill(0)
  .map((_, idx) => (
    <Grid
      key={idx}
      lg={3}
      xs={12}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      mt="50px"
    >
      <ContentLoader
        speed={2}
        width={190}
        height={300}
        viewBox="0 0 190 300"
        backgroundColor="#f0f0f0"
        foregroundColor="#ffffff"
      >
        <rect x="32" y="179" rx="3" ry="3" width="105" height="8" />
        <rect x="31" y="4" rx="0" ry="0" width="119" height="162" />
        <rect x="32" y="199" rx="3" ry="3" width="86" height="9" />
        <rect x="32" y="220" rx="3" ry="3" width="86" height="9" />
        <rect x="31" y="239" rx="0" ry="0" width="118" height="31" />
      </ContentLoader>
    </Grid>
  ));

const categorySkeletons = Array(8)
  .fill(0)
  .map((_, idx) => (
    <Grid
      key={idx}
      lg={3}
      xs={12}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      mt="50px"
    >
      <ContentLoader
        speed={2}
        width={200}
        height={200}
        viewBox="0 0 200 200"
        backgroundColor="#f0f0f0"
        foregroundColor="#ffffff"
      >
        <rect x="61" y="179" rx="3" ry="3" width="85" height="6" />
        <circle cx="104" cy="84" r="84" />
      </ContentLoader>
    </Grid>
  ));

const Skeletons = ({ skeletonType }) => {
  if (skeletonType === "product") {
    return (
      <Grid container direction="row">
        {productSkeleton}
      </Grid>
    );
  }

  if (skeletonType === "category") {
    return (
      <Grid container direction="row">
        {categorySkeletons}
      </Grid>
    );
  }
};

export default Skeletons;
