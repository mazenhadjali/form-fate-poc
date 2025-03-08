import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import TextInput from "./ui/TextInput";
import SelectBox from "./ui/SelectBox";
import CheckBox from "./ui/Checkbox";
import TextArea from "./ui/Textarea";
import Button from "./ui/Button";

const signupSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    age: z.number().min(18, "You must be at least 18 years old").max(100),
    birthDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }),
    newsletter: z.boolean().optional(),
    plan: z.enum(["free", "pro", "enterprise"]),
    bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
});

type SignupFormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
    
    const [submittedData, setSubmittedData] = useState<SignupFormData | null>(null);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, formState: { errors }, reset, } = useForm<SignupFormData>({ resolver: zodResolver(signupSchema), defaultValues: { plan: "free" } });

    const onSubmit = (data: SignupFormData) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmittedData(data);
            alert(JSON.stringify(data, null, 2));
            reset();
        }, 2000);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl"
        >
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
                Sign Up Form
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                    label="First Name"
                    {...register("firstName")}
                    error={errors.firstName?.message}
                />
                <TextInput
                    label="Last Name"
                    {...register("lastName")}
                    error={errors.lastName?.message}
                />
            </div>

            <TextInput
                label="Email"
                type="email"
                {...register("email")}
                error={errors.email?.message}
            />

            <TextInput
                label="Password"
                type="password"
                {...register("password")}
                error={errors.password?.message}
            />

            <TextInput
                label="Age"
                type="number"
                {...register("age", { valueAsNumber: true })}
                error={errors.age?.message}
            />

            <TextInput
                label="Birth Date"
                type="date"
                {...register("birthDate")}
                error={errors.birthDate?.message}
            />

            <SelectBox
                label="Subscription Plan"
                options={[
                    { value: "free", label: "Free" },
                    { value: "pro", label: "Pro ($29/month)" },
                    { value: "enterprise", label: "Enterprise (Custom)" },
                ]}
                {...register("plan")}
                error={errors.plan?.message}
            />

            <TextArea
                label="Bio (Optional)"
                {...register("bio")}
                error={errors.bio?.message}
            />

            <CheckBox
                label="Subscribe to newsletter"
                {...register("newsletter")}
                error={errors.newsletter?.message}
            />

            <Button
                type="submit"
                isLoading={loading}
            >
                Sign Up
            </Button>
        </form>
    );
};

export default SignupForm;