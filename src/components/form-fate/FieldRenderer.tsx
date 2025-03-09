import React from 'react';
import { TextInput, TextArea, SelectBox } from '../ui';
import { FieldRendererProps } from './interfaces';
import { CheckBox } from '../ui/CheckBox';


export const FieldRenderer: React.FC<FieldRendererProps> = ({ fieldKey, fieldSchema, register, error, required }) => {
    switch (fieldSchema.type) {
        case 'text':
            return (
                <TextInput
                    label={fieldSchema.title}
                    error={error}
                    required={required}
                    {...register(fieldKey)}
                />
            );
        case 'textarea':
            return (
                <TextArea
                    label={fieldSchema.title}
                    error={error}
                    required={required}
                    {...register(fieldKey)}
                />
            );
        case 'select':
            return (
                <SelectBox
                    label={fieldSchema.title}
                    error={error}
                    required={required}
                    options={fieldSchema.options || []}
                    {...register(fieldKey)}
                />
            );
        case 'checkbox':
            return (
                <CheckBox
                    label={fieldSchema.title}
                    error={error}
                    required={required}
                    {...register(fieldKey)}
                />
            );
        case 'radio':
            return (
                <SelectBox
                    label={fieldSchema.title}
                    error={error}
                    required={required}
                    options={fieldSchema.options || []}
                    {...register(fieldKey)}
                />
            );
        case 'password':
            return (
                <TextInput
                    label={fieldSchema.title}
                    error={error}
                    required={required}
                    type="password"
                    {...register(fieldKey)}
                />
            );
        case 'email':
            return (
                <TextInput
                    label={fieldSchema.title}
                    error={error}
                    required={required}
                    type="email"
                    {...register(fieldKey)}
                />
            );
        case 'date':
            return (
                <TextInput
                    label={fieldSchema.title}
                    error={error}
                    required={required}
                    type="date"
                    {...register(fieldKey)}
                />
            );
        case 'time':
            return (
                <TextInput
                    label={fieldSchema.title}
                    error={error}
                    required={required}
                    type="time"
                    {...register(fieldKey)}
                />
            );
        case 'dataUrl':
            return (
                <TextInput
                    label={fieldSchema.title}
                    error={error}
                    required={required}
                    type="url"
                    {...register(fieldKey)}
                />
            );


        default:
            return null;
    }
};
