import "./CardInfosItem.scss";
import { useAuth } from "../../context/authProvider";
import IRecipe from "../../@types/recipe";
import PropTypes from 'prop-types';

interface ICardInfoItem {
		label: string;
		info: number;
		icon: string;	
}

const CardInfosItem = ({ info, icon }: ICardInfoItem) => {

	return (
	<li>
		<i className={icon} />
		<span>{info}</span>
	</li>
	);
}

export default CardInfosItem;