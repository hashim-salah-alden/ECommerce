import Category from "../components/eCommerce/Category/Category";
import Loading from "../components/feddback/Loading/Loading";
import Grid from "@mui/material/Unstable_Grid2";

// custome hooks
import useCategories from "../hooks/useCategories";

const Categories = () => {
  const { loading, error, categories } = useCategories();
  return (
    <>
      <Loading status={loading} error={error} type="category">
        <Grid sx={{ mb: "100px" }} container spacing={2}>
          {categories.map((category) => {
            return <Category key={category.slug} {...category} />;
          })}
        </Grid>
      </Loading>
    </>
  );
};

export default Categories;
