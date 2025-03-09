import { forwardRef } from "react";

interface SelectBoxProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const SelectBox = forwardRef<HTMLSelectElement, SelectBoxProps>(({ label, error, options, ...props }, ref) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <select
      className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${error ? "border-red-500" : "border-gray-300"
        } focus:ring-2 focus:ring-blue-500`}
      ref={ref}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
)
);
SelectBox.displayName = "SelectBox";

export default SelectBox;