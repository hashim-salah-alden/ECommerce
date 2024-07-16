import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  actGetProducts,
  cleanUpProductsRecords,
} from "../store/products/productsSlice";

const useProducts = (productSlug) => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.products);

  useEffect(() => {
    const promise = dispatch(actGetProducts(productSlug));

    return () => {
      dispatch(cleanUpProductsRecords());
      promise.abort();
    };
  }, [dispatch]);

  const itemsFullInfo = [];

  records.products?.map((record) => {
    itemsFullInfo.push({ ...record, quantity: 1, maxUnits: 5 });
  });

  return { loading, error, itemsFullInfo };
};

export default useProducts;
