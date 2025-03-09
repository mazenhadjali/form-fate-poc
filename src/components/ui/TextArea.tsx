import { forwardRef } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label, error, ...props }, ref) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
        </label>
        <textarea
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${error ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500`}
            ref={ref}
            {...props}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
)
);
TextArea.displayName = "TextArea";

export default TextArea;