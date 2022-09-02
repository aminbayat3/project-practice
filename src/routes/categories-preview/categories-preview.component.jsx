import { useContext } from "react";

import { CategoriesContext } from "../../context/categories.context";

import CategoryPreview from "../../component/category-preview/category-preview.component";

import { CategoriesPreviewContainer } from "./categories-preview.styles";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <CategoriesPreviewContainer>
      {Object.values(categoriesMap).map((category) => (
        <CategoryPreview key={category.title} products={category} />
      ))}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
