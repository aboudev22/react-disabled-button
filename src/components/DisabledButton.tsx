import { ButtonProps } from "./Button.types";

const DisabledButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onclick}
      className={`${props.className} bg-stone-300 active:bg-stone-400 disabled:bg-stone-700 rounded-md p-2 cursor-pointer flex flex-row`}
    >
      {props.icon ? <img className="w-5 h-5" src={props.icon} alt="" /> : null}
      {props.description ? (
        <p className="text-xs text-black font-semibold">{props.description}</p>
      ) : null}
    </button>
  );
};

export default DisabledButton;
