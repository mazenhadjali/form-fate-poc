// src/components/ui/button.tsx
import { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Loader from "./Loader";

type ButtonVariant = | "primary" | "secondary" | "success" | "warning" | "danger" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: "none" | "sm" | "full";
    isLoading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = "primary", size = "md", rounded = "sm", isLoading = false, icon, iconPosition = "left", className = "", children, ...props }, ref) => {

    // Base styles
    const baseStyles = [
        "inline-flex items-center justify-center",
        "font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed"
    ];

    // Variants
    const variants = {
        primary: [
            "bg-blue-100 text-blue-700 hover:bg-blue-200",
            "focus:ring-blue-300 border border-blue-200",
        ],
        secondary: [
            "bg-gray-100 text-gray-700 hover:bg-gray-200",
            "focus:ring-gray-300 border border-gray-200",
        ],
        success: [
            "bg-green-100 text-green-700 hover:bg-green-200",
            "focus:ring-green-300 border border-green-200",
        ],
        warning: [
            "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
            "focus:ring-yellow-300 border border-yellow-200",
        ],
        danger: [
            "bg-red-100 text-red-700 hover:bg-red-200",
            "focus:ring-red-300 border border-red-200",
        ],
        ghost: [
            "bg-transparent text-gray-600 hover:bg-gray-50",
            "focus:ring-gray-200 border border-transparent",
            "hover:border-gray-200",
        ],
    };

    // Sizes
    const sizes = {
        sm: "text-sm py-1.5 px-3",
        md: "text-base py-2 px-4",
        lg: "text-lg py-2.5 px-5",
    };

    // Rounded corners
    const roundness = {
        none: "rounded-none",
        sm: "rounded-md",
        full: "rounded-full",
    };

    // Icon sizing
    const iconSizes = {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
    };

    return (
        <button
            ref={ref}
            className={clsx(baseStyles, variants[variant], sizes[size], roundness[rounded], className)}
            disabled={isLoading || props.disabled}
            aria-disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? (
                <Loader size={size} />
            ) : (
                <>
                    {icon && iconPosition === "left" && (
                        <span className={`mr-2 ${iconSizes[size]}`}>
                            {icon}
                        </span>
                    )}

                    {children}

                    {icon && iconPosition === "right" && (
                        <span className={`ml-2 ${iconSizes[size]}`}>
                            {icon}
                        </span>
                    )}
                </>
            )}
        </button>
    );
}
);

Button.displayName = "Button";

export default Button;