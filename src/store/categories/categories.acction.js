import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTIONS_TYPES } from "./categories.type";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_MAP, categoriesMap);
