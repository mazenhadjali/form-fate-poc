import { UseFormRegister } from "react-hook-form";

export interface FormDefinition {
    name?: string;
    properties: {
        [key: string]:
        | { type: 'text', title: string, description: string }
        | { type: 'password', title: string, description: string }
        | { type: 'email', title: string, description: string }
        | { type: 'date', title: string, description: string }
        | { type: 'time', title: string, description: string }
        | { type: 'string', title: string, description: string }
        | { type: 'select', title: string, description: string, options: { label: string, value: string }[] }
        | { type: 'radio', title: string, description: string, options: { label: string, value: string }[] }
        | ({ type: 'number', title: string, description: string } & (
            | { minimum?: never, maximum?: never }
            | { minimum: number, maximum: number }
        ))
        | { type: 'boolean', title: string, description: string }
        | { type: 'checkbox', title: string, description: string };

    };
    required?: string[];
};

export interface DynamicFormProps {
    formDefinition: FormDefinition;
    onSubmit: (data: Record<string, unknown>) => void;
}

export interface FieldSchema {
    type: string;
    title: string;
    description?: string;
    options?: { value: string; label: string }[];
    format?: string;

}

export interface FieldRendererProps {
    fieldKey: string;
    fieldSchema: FieldSchema;
    register: UseFormRegister<any>;
    error?: any;
    required?: boolean;
}