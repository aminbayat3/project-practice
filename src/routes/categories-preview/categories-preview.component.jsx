import { useSelector } from "react-redux/es/hooks/useSelector";

import { selectCategoriesMap } from "../../store/categories/catgories.selector";

import CategoryPreview from "../../component/category-preview/category-preview.component";

import { CategoriesPreviewContainer } from "./categories-preview.styles";

const CategoriesPreview = () => {
  console.log('kfjs')
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log(categoriesMap)
  return (
    <CategoriesPreviewContainer>
      {Object.values(categoriesMap).map((category) => (
        <CategoryPreview key={category.title} products={category} />
      ))}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
