/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { actGetAllProducts } from "../store/products/productsSlice";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../components/feddback/Loading/Loading";
import Hero from "../components/common/HeroSection/Hero";
import AllProducts from "../components/eCommerce/products/AllProducts";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const allProductsSection = useRef(null);
  const dispatch = useDispatch();

  const handleScroll = () => {
    allProductsSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { products, totalPages, error, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(actGetAllProducts(currentPage));
  }, [dispatch, currentPage]);

  return (
    <>
      <Hero />
      <Loading status={loading} error={error} type="product">
        <AllProducts
          allProductsSection={allProductsSection}
          handleScroll={handleScroll}
          products={products}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Loading>
    </>
  );
};

export default Home;
