import { useEffect, useState } from "react";

import Step from "../Step/Step";
import useAuth from "../../hooks/useAuth";
import Ingredient from "../Ingredient/Ingredient";
import { useParams } from "react-router-dom";
import instanceAxios from "../../utils/axios";
// import axios from "axios";
import IRecipe from "../../@types/recipe";
import CardRecipeDetail from "../CardRecipeDetail/CardRecipeDetail";

const Recipe = () => {
  const { isConnected, token } = useAuth();
  const [recipe, setRecipe] = useState<IRecipe>({});
  const [recipeContents, setRecipeContents] = useState([]);
  const [recipeSteps, setRecipeSteps] = useState([]);

  const params = useParams();
  const recipeId = params.slug;

  useEffect(() => {

    (async () => {
        const response = await instanceAxios.get(
          `recipe/${recipeId}`,
        );

        const recetteData = await response.data.recette;
        const steps = recetteData.instruction;

        const paragraph =
          "Étape 1 : Préchauffez le four à 200°C. Dans une poêle à feu vif ajoutez la sauce soja, le sucre et le beurre. Faire réduire pour faire un caramel. Étape 2 : Coupez les tomates cerises en deux. Étape 3 : Versez le caramel dans le fond du plat et y ajouter les tomates. Étape 4 : Disposez la pâte feuilletée sur le dessus. Étape 5 : Faites un trou au milieu de la pate puis enfournez à 200°C pendant 20 minutes. Étape 6 : Sortez la tarte du four, attendez que la tarte refoidisse un peu. Démoulez : placez une grande assiette sur votre plat puis retournez le tout. Servez avec un peu de basilic !";

        const stepsArray = paragraph.split(/[\s]*Étape\s[0-9]\s:\s/gi);

        stepsArray.forEach((item, index) => {
          if (item === "") {
            stepsArray.splice(index, 1);
          }
        });

        setRecipeSteps(stepsArray);
        setRecipe(recetteData);
        setRecipeContents(recetteData.contents);

      
  })();
    
  }, []);

  return (
    <>
      <h1 className="title">{recipe.title}</h1>

      <div className="recipe_pres">
        <CardRecipeDetail data={recipe} type="recipe" isConnected={isConnected} />

        <div className="recipe_txt">
          <p>{recipe.description}</p>

          <h2>Ingrédients</h2>

          <ul className="ingredients-list">
            {recipeContents.map((item, index) => (
              <Ingredient key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2>Préparation</h2>
        <ol className="steps-list">
          {recipeSteps.map((item, index) => (
            <Step key={index} item={item} index={index} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default Recipe;
