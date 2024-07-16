import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actGetCategories } from "../store/categories/categroiesSlice";

const useCategories = () => {
  const { loading, error, records } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  const categories = [];

  records.map((record) => {
    categories.push({ ...record, categoryImg: record.slug });
  });

  const getRandomCategory = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  };
  return { loading, error, categories, getRandomCategory };
};

export default useCategories;
