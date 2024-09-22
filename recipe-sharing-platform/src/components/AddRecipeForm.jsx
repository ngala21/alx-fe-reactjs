import { useState, useEffect } from "react";
import data from "../data.json";

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors('');
  }, []);}

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required';
    if (!ingredients || ingredients.split('\n').length < 2) newErrors.ingredients = 'Please enter at least two ingredients';
    if (!steps) newErrors.steps = 'Preparation steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



function AddRecipeForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setTitle(values => ({...values, ['']: value}))
        setIngredients(values => ({...values, ['']: value}))
        setSteps(values => ({...values, ['']: value}))
        setErrors(values => ({...values, ['']: value}))
      }

    return ( 
        <div className="max-w-xl mx-auto p-4 md:p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
  
        <form onSubmit={handleSubmit} >
        <div className="mb-4">
           <label className="block text-sm font-medium mb-1" >Recipe title:
             <input 
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
           </label>
           </div>
           <div className="mb-4">
           <label className="block text-sm font-medium mb-1">Ingredients (one per line)</label>
           <textarea>
              Ingredients.
           </textarea>
           </div>
           <div className="mb-4">
           <label className="block text-sm font-medium mb-1">Preparation Steps (one per line)</label>
           <textarea>
              Preparation steps
           </textarea>
           </div>
           <button
             type="submit"
             className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">Add Recipe
           </button>

        </form>
        </div>
     );
}

export default AddRecipeForm;