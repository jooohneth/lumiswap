import PropTypes from "prop-types";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

Field.propTypes = {
  onClick: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  activeField: PropTypes.bool.isRequired,
};

export function RemoveLiquiditySelect(props) {
  // This component is used to selecting a coin and entering a value, the props are explained below:
  //      onClick - (string) => void - Called when the button is clicked
  //      symbol - string - The text displayed on the button
  //      value - string - The value of the text field
  //      onChange - (e) => void - Called when the text field changes
  //      activeField - boolean - Whether text can be entered into this field or not

  const { onClick1, onClick2, symbol1, symbol2 } = props;

  return (
    <div className="flex justify-around items-center flex-row w-full min-w-full h-20 sm:p-8 p-4 rounded-2xl">
      <button
        onClick={onClick1}
        className="flex flex-row justify-around items-center bg-white/50 py-2 px-4 rounded-xl font-poppins font-medium text-purple-3 shadow-lg"
      >
        <span>{symbol1}</span>
        <ChevronDownIcon className="ml-2 h-5 w-5 text-purple-3 transition duration-150 ease-in-out group-hover:text-opacity-80"></ChevronDownIcon>
      </button>
      <button
        onClick={onClick2}
        className="flex flex-row justify-around items-center bg-white/50 py-2 px-4 rounded-xl font-poppins font-medium text-purple-3 shadow-lg"
      >
        <span>{symbol2}</span>
        <ChevronDownIcon className="ml-2 h-5 w-5 text-purple-3 transition duration-150 ease-in-out group-hover:text-opacity-80"></ChevronDownIcon>
      </button>
    </div>
  );
}

export function RemoveLiquidityInput(props) {
  // This component is used to selecting a coin and entering a value, the props are explained below:
  //      onClick - (string) => void - Called when the button is clicked
  //      symbol - string - The text displayed on the button
  //      value - string - The value of the text field
  //      onChange - (e) => void - Called when the text field changes
  //      activeField - boolean - Whether text can be entered into this field or not

  const { value, onChange, activeField } = props;
  return (
    <div className="flex justify-between items-center flex-row w-full min-w-full h-20 bg-off-white sm:p-8 p-4 rounded-2xl">
      <input
        placeholder="0.0"
        type="number"
        value={value}
        disabled={!activeField}
        onChange={onChange}
        className="w-full flex-1 bg-transparent outline-none font-poppins font-medium text-md text-black"
      />
    </div>
  );
}

export default function Field(props) {
  // This component is used to selecting a token and entering a value, the props are explained below:
  //      onClick - (string) => void - Called when the button is clicked
  //      symbol - string - The text displayed on the button
  //      value - string - The value of the text field
  //      onChange - (e) => void - Called when the text field changes
  //      activeField - boolean - Whether text can be entered into this field or not

  const { onClick, symbol, value, onChange, activeField } = props;

  return (
    <div className="flex justify-between items-center flex-row w-full min-w-full h-20 bg-off-white sm:p-8 p-4 rounded-2xl">
      <input
        placeholder="0.0"
        type="number"
        value={value}
        disabled={!activeField}
        onChange={onChange}
        className="w-full flex-1 bg-transparent outline-none font-poppins font-medium text-md text-black"
      />
      <div className="relative" onClick={onClick}>
        <button className="flex flex-row justify-around items-center bg-white/50 py-2 px-4 rounded-xl font-poppins font-medium text-purple-3 shadow-lg">
          <span>{symbol}</span>
          <ChevronDownIcon className="ml-2 h-5 w-5 text-purple-3 transition duration-150 ease-in-out group-hover:text-opacity-80"></ChevronDownIcon>
        </button>
      </div>
    </div>
  );
}
