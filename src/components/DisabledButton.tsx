import { ButtonProps } from "./Button.types";

const DisabledButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onclick}
      className={`${props.className} bg-black rounded-md p-4 cursor-pointer flex flex-row`}
    >
      {props.icon ? <img className="w-5 h-5" src={props.icon} alt="" /> : null}
      {props.description ? (
        <p className="text-base text-white/80 font-semibold">
          {props.description}
        </p>
      ) : null}
    </button>
  );
};

export default DisabledButton;
