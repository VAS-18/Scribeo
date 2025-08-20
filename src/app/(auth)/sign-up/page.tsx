"use client";

import React, { useState } from "react";
import Noise from "@/components/Noise";
import SignUpForm from "@/components/auth/SignUpForm";
import { useRouter } from "next/navigation";
import { signUpSchema, TSignUpSchema } from "@/lib/validators/authValidator";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const SignUpPage = () => {
  const [isPending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const form = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (values: TSignUpSchema) => {
    setPending(true);
    authClient.signUp.email(
      {
        email: values.email,
        password: values.password,
        name: values.firstName + " " + values.lastName,
      },

      {
        onSuccess: () => {
          router.push("/scribe");
          setPending(false);
        },
        onError: ({ error }) => {
          setError(error.message);
          toast.error(`${error.message}`);
          setPending(false);
        },
      }
    );
  };

  return (
    <div className="h-screen w-full">
      <div className="flex h-full">
        {/* Left Side */}
        <div className="relative hidden w-1/2 bg-gradient-to-b from-cyan-200 via-cyan-500 via-20% to-cyan-900 overflow-hidden md:block">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_110%_at_bottom,_var(--tw-gradient-from)_50%,_var(--tw-gradient-to)_100%)] from-black"></div>

          <Noise
            patternSize={100}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={1000}
            patternAlpha={10}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center">
            <div className="space-y-4 flex flex-col items-center">
              <div className="mt-10 flex items-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <circle
                    cx="16"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
                <span className="text-2xl">Scribeo</span>
              </div>
              <span className="text-4xl font-bold">Get Started with Us</span>
              <span className="text-lg opacity-90">
                enter the required details to register
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-10">
          <div className="w-full max-w-md">
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-foreground/30 text-red-700 font-bold border border-red-300 border-dashed text-center">
                {error}
              </div>
            )}
            <SignUpForm
              form={form}
              onSubmit={handleSubmit}
              isPending={isPending}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
