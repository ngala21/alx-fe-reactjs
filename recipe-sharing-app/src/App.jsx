
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './components/RecipeStore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {

  const setRecipes = useRecipeStore((state) => state.setRecipes);

  return (
   <div>

       
    <Router>
    <Routes>
      <Route path="/recipes/:recipeId" element={<RecipeDetailsWrapper />} />
      
    </Routes>
  </Router>

      <AddRecipeForm />
      <RecipeList />
     <SearchBar />
     <FavoritesList />
     <RecommandationsList />
    </div>
  );
};

export default App
