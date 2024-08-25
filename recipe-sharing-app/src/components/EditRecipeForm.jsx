import { useRecipeStore } from './RecipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
const handleSubmit = (event) => { 
  event.preventDefault();
  return (
    <form>
        <input type='text' value={title} />
        <textarea value={description} />
        <button>Save Changes</button>
    </form>
  );
}

export default EditRecipeForm;
