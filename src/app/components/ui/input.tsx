interface IInputProps {
  placeholder: string;
  size?: "input-lg" | "input-sm" | "input-xs";
}

export const Input = (props: IInputProps) => {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        className={`input input-bordered ${
          props.size || "input-md"
        } w-full max-w-xs`}
      />
    </>
  );
};
