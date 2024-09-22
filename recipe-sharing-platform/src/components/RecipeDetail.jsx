import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipesData from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = () => {
      const recipeDetail = recipesData.find((recipe) => recipe.id === parseInt(id));
      setRecipe(recipeDetail);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-auto mb-6 rounded-lg shadow-md" />
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Ingredients</h2>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Instructions</h2>
        <ol className="list-decimal pl-5 mt-2 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
