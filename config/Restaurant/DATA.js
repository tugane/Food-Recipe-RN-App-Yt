import Recipes from "./Recipes";

const categories = [
  {
    id: 1,
    title: "Main",
    recipes: Recipes,
  },
  {
    id: 2,
    title: "Healthy Food",
    recipes: [...Recipes.slice(4, 8)],
  },
  {
    id: 3,
    title: "Fast Food",
    recipes: [...Recipes.slice(3, 7)],
  },
  {
    id: 4,
    title: "Drinks",
    recipes: [...Recipes.slice(2, 6)],
  },
];

export default categories;
