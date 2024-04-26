export default interface IRecipe {
  id: number;
  title: string;
  description: string;
  instruction: string;
  image: string;
  duration: number;
  serving: number;
  meal: {
    name: string;
  };
  contents: [
    {
      id: number;
      quantity: number;
      ingredient: {
        name: string;
      };
      measure: {
        type: string;
      };
    }
  ];
};
