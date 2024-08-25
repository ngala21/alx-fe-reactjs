import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),


deleteRecipe: (deletedRecipe) => set(state => ({ recipes: [...state.recipes, deletedRecipe] })),
setRecipes: (recipes) => set({ recipes }),


updateRecipe: (updatedRecipe) => set(state => ({ recipes: [...state.recipes, updatedRecipe] })),
setRecipes: (recipes) => set({ recipes })

  
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
 )})),

  recommendations: [],
 generateRecommendations: () => set(state => {
   // Mock implementation based on favorites
   const recommended = state.recipes.filter(recipe =>
     state.favorites.includes(recipe.id) && Math.random() > 0.5
   );
   return { recommendations: recommended };
 }),

}));

export default useRecipeStore;
