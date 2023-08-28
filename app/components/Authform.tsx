'use client'

import React, { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Input } from "@/chat_app/components/Input";
import { Button } from "@/chat_app/components/Button";

type AuthVariant = 'LOGIN' | 'REGISTER';

export default function AuthForm() {
    const [variant, setVariant] = useState<AuthVariant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);
    
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            // Registration logic
        }
        
        if (variant === 'LOGIN') {
            // Login logic
        }
    };

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <h1 className="text-center text-gray-500 font-bold text-xl pb-2">{variant === 'LOGIN'? 'SignIn' : 'Register'}</h1>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && <Input id="name" label="Name" register={register} errors={errors} disabled={isLoading}/>}
                    <Input id="email" label="Email Address" type="email" register={register} errors={errors}/>
                    <Input id="password" label="Password" type="password" register={register} errors={errors}/>
                    <div>
                        <Button disabled={isLoading} fullWidth type="submit">
                            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <div>
                        {variant === 'LOGIN' ? 'New to ChatApp' : 'Already have an Account'}
                    </div>
                    <div onClick={toggleVariant} className="underline cursor-pointer">
                        {variant === 'LOGIN' ? 'Create an account' : 'SignIn'}
                    </div>
                </div>
            </div>
        </div>
    );
}
