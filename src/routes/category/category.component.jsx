import { useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories.context";

import ProductCard from "../../component/product-card/product-card.component";

import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { selectItems } = useContext(CategoriesContext);
  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {selectItems(category) &&  selectItems(category).items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
