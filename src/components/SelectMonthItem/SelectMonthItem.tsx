import './SelectMonthItem.scss';

const SelectMonthItem = ({ item, index }) => {
	return (
		<option value={index}>{item}</option>
	);
};

export default SelectMonthItem;
