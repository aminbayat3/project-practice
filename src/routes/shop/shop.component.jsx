import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/categories.acction";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    try {
      (async () => {
        const categoryMap = await getCategoriesAndDocuments();
        if (mounted) {
          dispatch(setCategoriesMap(categoryMap));
        }
      })();
    } catch (error) {
      console.log("error occured!", error.message);
    }
    return () => (mounted = false);
  }, []);

  return (
    <Routes>
      <Route exact index element={<CategoriesPreview />} />
      <Route index path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
