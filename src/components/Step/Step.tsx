import './Step.scss';

function Step( {item, index}) {
  return (
    <li>      
      <p data-step={index + 1}>{item}</p>
    </li>
  );
}

export default Step;
