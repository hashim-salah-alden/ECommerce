import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  actGetProductById,
  cleanUpProductsRecords,
} from "../store/products/productsSlice";

const useProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, error, productFullInfo } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    const promise = dispatch(actGetProductById(params.id));

    return () => {
      dispatch(cleanUpProductsRecords());
      promise.abort();
    };
  }, [dispatch]);

  return { loading, error, productFullInfo };
};

export default useProduct;
