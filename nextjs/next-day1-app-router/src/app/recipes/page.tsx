"use client"
import React, {useState, useEffect } from "react";

type Recipe = {
  id: number;
  name: string;
  prepTimeMinutes: number;
  servings: number;
};
const Recipes = ()=>{
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const[loading, setLoading] = useState<boolean>(true);
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch('https://dummyjson.com/recipes');
                const data = await response.json();
                setRecipes(data.recipes.slice(0,10))
            }
            catch(err){
                console.error(err)
            }
            finally{
                setLoading(false);
            }
         }
         fetchData();
    },[])
    return(
        <>
        <h2 className="text-center text-[22px] font-bold">Recipes</h2>
        {loading?"recipes are loading....":
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">PrepTime in Minutes</th>
              <th className="py-3 px-6">Servings</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe.id} className="border-b hover:bg-[#9887dd]">
                <td className="py-3 px-6 text-center">{recipe.id}</td>
                <td className="py-3 px-6 text-center">{recipe.name}</td>
                <td className="py-3 px-6 text-center">{recipe.prepTimeMinutes}</td>
                <td className="py-3 px-6 text-center">{recipe.servings}</td>
              </tr>
            ))}
          </tbody>
        </table>
        }
        </>

    )
}
export default Recipes;