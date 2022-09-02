import { useNavigate } from "react-router-dom";

import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, size, route } = category;
  const navigate = useNavigate();

  const navigateToCategoryPage = () => navigate(`${route}`);

  return (
    <DirectoryItemContainer size={size} onClick={navigateToCategoryPage}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h1>{title.toUpperCase()}</h1>
        <p>SHOP NOW</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
