import { cn } from "@/lib/utils";
import { InputFieldProps } from "@/types";

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  containerClassName,
  error,
  inputProps
}: InputFieldProps) => {
  return (
    <div className={cn("flex flex-col gap-2 w-full md:w-1/4", containerClassName)}>
      <label htmlFor={name} className="text-sm text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
