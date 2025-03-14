import React, { useState } from 'react';
import { FormDefinition, FormFate } from './form-fate';
import { Button } from './ui';

export const SignupForm: React.FC = () => {

    const [signupForm] = useState<FormDefinition>({
        name: 'signupForm',
        // the following properties are the form fields and will be validated by the useFormFate hook 
        properties: { 
            firstName: {
                type: 'text',
                title: 'First Name',
                description: 'Enter your first name',
            },
            lastName: {
                type: 'text',
                title: 'Last Name',
                description: 'Enter your last name',
            },
            gender: {
                type: 'radio',
                title: "Gender",
                description: 'Select your gender',
                options: [
                    { label: '', value: '' },
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                    { label: 'Other', value: 'other' }
                ]
            },
            dob: {
                type: 'date',
                title: 'Date of Birth',
                description: 'Enter your date of birth',
            },
            email: {
                type: 'email',
                title: 'Email',
                description: 'Enter your email address',
            },
            password: {
                type: 'password',
                title: 'Password',
                description: 'Enter your password',
            },
            confirmPassword: {
                type: 'password',
                title: 'Confirm Password',
                description: 'Confirm your password',
            },
            terms: {
                type: 'checkbox',
                title: 'Terms & Conditions',
                description: 'I agree to the terms and conditions',
            }
        },
        required: ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'terms'],
        // the following buttons will be rendered directly rendred by the FormFate component and will be validated by the useFormFate hook for the essential Props
        buttons: [
            { label: 'Submit', type: 'submit', variant: "primary", onClick: () => onSubmit },
            { label: 'Reset', type: 'reset', variant: "secondary", onClick: () => console.log('Reset clicked') },
            { label: 'Cancel', type: 'button', variant: "danger", onClick: () => console.log('Cancel clicked') }
        ]
    });

    const [values, setValues] = useState<Record<string, unknown> | null>(null);


    const onSubmit = (data: Record<string, unknown>) => {
        console.log('Form Submitted:', data);
        setValues(data);
    };

    return (
        <div>
            {
                values && (
                    <div className='container p-4 mx-auto border border-gray-200 rounded-xl shadow-md felx flex-col space-y-4'>
                        <h1 className='text-2xl font-bold text-center p-1 my-2'>Form Values</h1>
                        <div className='mx-auto max-w-xl border border-gray-200 rounded-xl p-4 shadow-md text-white bg-gray-800'>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                        </div>
                        <div className='flex justify-center'>
                            <Button label='reset' onClick={() => setValues(null)} />
                        </div>
                    </div>
                )
            }
            <h1 className='text-2xl font-bold text-center p-1 my-2'>Signup Form</h1>
            <div className="container p-4 mx-auto border border-gray-200 rounded-xl shadow-md">
                <FormFate formDefinition={signupForm} onSubmit={onSubmit} />
            </div>
        </div>
    );
};

export default SignupForm;