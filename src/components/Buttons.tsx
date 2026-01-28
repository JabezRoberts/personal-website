import type { ButtonProps } from "@/types";

export const Button: React.FC<ButtonProps> = ({ 
    variant = "primary",
    size = "md",
    children, 
    className = "",
    ...props 
}) => {
    const baseClasses = "font-medium rounded-full transition-all duration-300 shadow-sm";

    let variantClasses = "";

    switch (variant) {
        case "primary":
            variantClasses = "bg-accent text-white hover:bg-accent/90 dark:bg-accent-light dark:hover:bg-accent-light/90";
            break;

        case "secondary":
            variantClasses = "bg-transparent border border-accent text-accent hover:bg-accent/10 dark:border-accent-light dark:text-accent-light dark:hover:bg-accent-light/10";
            break;

        case "ghost":
            variantClasses = "bg-transparent text-accent hover:bg-accent/10 dark:text-accent-light dark:hover:bg-accent-light/10";
            break;

        case "danger":
            variantClasses = "bg-red text-white hover:bg-red-600";
            break;
    }


    let sizeClasses = "";
    
    switch (size) {
        case "sm":
            sizeClasses = "px-4 py-1.5 text-sm";
            break;

        case "md":
            sizeClasses = "px-6 py-2.5 text-sm";
            break;

        case "lg":
            sizeClasses = "px-7 py-3 text-base";
            break;
    }

    return (
        <button className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`} {...props}>
            {children}
        </button>
    );
};