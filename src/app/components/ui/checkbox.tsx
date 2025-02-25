interface ICheckboxProps {
  checked: boolean;
}
export const Checkbox = ({ checked }: ICheckboxProps) => {
  return (
    <>
      <input
        type="checkbox"
        className="checkbox checkbox-sm"
        checked={checked}
      />
    </>
  );
};
