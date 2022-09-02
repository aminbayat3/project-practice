import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewContainer, Title, Preview } from "./category-preview.styles";

const CategoryPreview = ({ products }) => {
  const { items, title } = products;
  return (
    <CategoryPreviewContainer>
      <h2>
      <Title to={title.toLowerCase()}>{title.toUpperCase()}</Title>
      </h2>
      
      <Preview>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
