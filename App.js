import React from "react";
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import DATA from "./config/Restaurant/DATA";
const App = () => {
  return <RecipeDetailScreen recipe={DATA[0].recipes[1]} />;
};

export default App;
