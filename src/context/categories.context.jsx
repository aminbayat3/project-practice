import { createContext, useState, useEffect } from "react";

// import { PRODUCTS } from "../shop-data.js";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: [],
  selectItems: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    let mounted = true;

    try {
      (async () => {
        const categoryMap = await getCategoriesAndDocuments();
        // console.log(categoryMap);
      if(mounted) {
        setCategoriesMap(categoryMap);
      }
    })();
  } catch(error) {
    console.log("error occured!", error.message);
  }
  return () => mounted = false

  }, []);

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', PRODUCTS);
  // }, []);

  const selectItems = (productId) => { 
    return categoriesMap[productId]; //if we had an array of objects instead of nested objects we needed to go through maybe all of the in order to find the right object's title that matches with the productId, now we can map throught it to show the items.
  }

  const value = {categoriesMap, selectItems}

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
