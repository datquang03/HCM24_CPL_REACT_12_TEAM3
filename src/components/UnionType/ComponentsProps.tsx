import React from "react";

type ButtonProps = {
  className: string;
  label: string;
  onClick: () => void;
  disabled?: boolean | string;
};

const ComponentsProps: React.FC<ButtonProps> = ({
  className,
  label,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled === true || disabled === "true"}
    >
      {label}
    </button>
  );
};

export default ComponentsProps;
