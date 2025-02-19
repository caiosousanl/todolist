interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  size?: "btn-lg" | "btn-sm" | "btn-xs"; // Add size property
}

export const Button = (props: IButtonProps) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`btn btn-accent rounded-lg ${props.size}`} // Apply size class
        type="button"
      >
        {props.children}
      </button>
    </>
  );
};
