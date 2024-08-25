import { useRecipeStore } from './RecipeStore';
import { useNavigate } from './react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state =>
    state.recipes.find(recipe => deletedRecipe === deletedRecipe)
    const navigate = useNavigate();

  );

  return (
    <button onClick ={handleDelete}>Delete Recipe</button>
  );
}

export default DeleteRecipeButton;
