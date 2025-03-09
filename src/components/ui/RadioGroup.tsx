import { forwardRef } from "react";

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    error?: string;
    options: { value: string; label: string }[];
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
    ({ label, error, options, ...props }, ref) => {
        // Extract radio input props from spread register
        const { name, onChange, onBlur, ...restDivProps } = props as any;

        return (
            <div className="mb-4" ref={ref} {...restDivProps}>
                <label className={`block text-sm font-bold mb-2 ${error ? "text-red-500" : "text-gray-700"}`}>
                    {label}
                </label>
                <div className="space-y-2">
                    {options.map(({ value, label: optionLabel }) => {
                        const inputId = `${name}-${value}`;
                        return (
                            <label key={inputId} htmlFor={inputId} className="flex items-center space-x-2">
                                <input
                                    id={inputId}
                                    type="radio"
                                    name={name}
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    className={`form-radio h-4 w-4 transition duration-150 ease-in-out ${error ? "border-red-500 text-red-500" : "border-gray-300 text-blue-500"
                                        }`}
                                />
                                <span className="text-gray-700">{optionLabel}</span>
                            </label>
                        );
                    })}
                </div>
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
        );
    }
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;