import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./styles.module.css";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

const { sliderButton, swiperSlide, sliderLeftContent, sliderHeading } = styles;

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <Grid className={swiperSlide} contianer>
          <Grid className={sliderLeftContent} xs={6}>
            <Typography className={sliderHeading} variant="h3" component="h2">
              categories
            </Typography>
            <Typography
              sx={{
                width: "250px",
                margin: "10px 0 0",
                textTransform: "capitalize",
              }}
              variant="p"
              component="h2"
            >
              sale up to <span style={{ color: "#D23F57" }}>30% off</span>
            </Typography>
            <Link to="/categories">
              <Button className={sliderButton} variant="outlined">
                Shop Now
              </Button>
            </Link>
          </Grid>
          <Grid xs={6}>
            <img
              style={{ display: "block", width: "100%", height: "100%" }}
              src="slider/sliderone.png"
              alt=""
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid className={swiperSlide} contianer>
          <Grid className={sliderLeftContent} xs={6}>
            <Typography className={sliderHeading} variant="h3" component="h2">
              Register
            </Typography>
            <Typography
              sx={{ width: "320px", margin: "10px 0 0" }}
              variant="p"
              component="h2"
            >
              Create Your <span style={{ color: "#D23F57" }}>Account Now </span>
            </Typography>
            <Link to="/register">
              <Button className={sliderButton} variant="outlined">
                Sign Up
              </Button>
            </Link>
          </Grid>
          <Grid xs={6}>
            <img
              style={{ display: "block", width: "100%", height: "100%" }}
              src="slider/slidertwo.png"
              alt=""
            />
          </Grid>
        </Grid>
      </div>
    </Slider>
  );
}
