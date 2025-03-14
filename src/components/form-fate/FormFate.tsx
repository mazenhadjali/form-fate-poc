import React from 'react';
import { useFormFate } from './useFormFate';
import { FieldRenderer } from './FieldRenderer';
import { DynamicFormProps, FieldSchema } from './interfaces';
import { Button } from '../ui';

export const FormFate: React.FC<DynamicFormProps> = ({ formDefinition, onSubmit }) => {
    const { validatedSchema, register, getValues, errors } = useFormFate({ formDefinition, onSubmit });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(getValues());
    };

    return (
        <form name={validatedSchema.name} onSubmit={handleSubmit}>
            {Object.entries(validatedSchema.properties).map(([fieldKey, fieldSchema]: [string, FieldSchema]) => (
                <FieldRenderer
                    key={fieldKey}
                    fieldKey={fieldKey}
                    fieldSchema={fieldSchema}
                    register={register}
                    error={errors[fieldKey]}
                    required={formDefinition.required?.includes(fieldKey)}
                />
            ))}
            <div className="form-group flex justify-end space-x-4 mt-4 pt-4">
                {formDefinition.buttons.map((buttonProps, index) => (
                    <Button key={index} {...buttonProps} />
                ))}
            </div>
        </form>
    );
};

export default FormFate;
