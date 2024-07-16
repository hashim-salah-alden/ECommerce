/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";
import ProductCard from "../../../eCommerce/productCard/ProductCard";

const { sliderContainer } = styles;

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#1f2937",
        padding: "1px",
      }}
      onClick={onClick}
    />
  );
}

const ProductsSlider = ({ itemsFullInfo }) => {
  const settings = {
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={sliderContainer}>
      <Slider {...settings}>
        {itemsFullInfo?.map((product) => {
          {
            return <ProductCard product={product} smallCard={true} />;
          }
        })}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
