import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route exact index element={<CategoriesPreview />} />
      <Route index path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
