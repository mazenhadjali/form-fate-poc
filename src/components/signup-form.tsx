import React, { useState } from 'react';
import { FormDefinition, FormFate } from './form-fate';

export const SignupForm: React.FC = () => {

    const [signupForm] = useState<FormDefinition>({
        name: 'signupForm',
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
        required: ['password']
    });


    const onSubmit = (data: Record<string, unknown>) => {
        console.log('Form Submitted:', data);
    };

    return (
        <div>
            <h1 className='text-2xl font-bold text-center p-1 my-2'>Signup Form</h1>
            <div className="container p-4 mx-auto border border-gray-200 rounded-xl shadow-md">
                <FormFate formDefinition={signupForm} onSubmit={onSubmit} />
            </div>
        </div>
    );
};

export default SignupForm;