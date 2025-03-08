import { forwardRef } from "react";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
    ({ label, error, ...props }, ref) => (
        <div className="mb-4 flex items-center">
            <input
                type="checkbox"
                className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${error ? "border-red-500" : ""
                    }`}
                ref={ref}
                {...props}
            />
            <label className="ml-2 block text-sm text-gray-900">
                {label}
            </label>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    )
);
CheckBox.displayName = "CheckBox";

export default CheckBox;