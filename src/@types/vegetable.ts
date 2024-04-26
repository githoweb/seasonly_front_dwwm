import IMonth from "./month";

export default interface IVegetable {
  id: number;
  title: string;
  description: string;
  image: string;
  benefits: string;
  local: boolean;
  conservation: string;
  months: IMonth[];
  botanical: {
    id: number;
    name: string;
  };
  genre: {
    id: number;
    name: string;
  };
  ingredient: [];
}
