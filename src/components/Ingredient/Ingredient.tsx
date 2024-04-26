import "./Ingredient.scss";

interface IIngredient {
    ingredient: {
      name: string;
    };
    quantity: number;
    measure: {
      type: string;
    };
};

const Ingredient = ({ item }: { item: IIngredient }) => {
  return (
    <li className="ingredient">
      <em>{item.ingredient.name} </em> :
      {" " + item.quantity + " "}
      {item.measure.type}
    </li>
  );
};

export default Ingredient;
