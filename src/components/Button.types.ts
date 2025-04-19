type ButtonBaseProps = {
  onclick?: () => void;
  className?: string;
  disabled: boolean;
};

type WithIcon = ButtonBaseProps & {
  icon: string; //Icon url
  description?: string; //Button description
};

type WithDescription = ButtonBaseProps & {
  description: string;
  icon?: string;
};

export type ButtonProps = WithDescription | WithIcon;
