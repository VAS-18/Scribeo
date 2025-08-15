"use client";

import React from "react";
import Noise from "@/components/Noise";
import SignInForm from "@/components/auth/SignInForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, TSignInSchema } from "@/lib/validators/authValidator";

const SignInPage = () => {
  const form = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleSubmit = (data: TSignInSchema) => {
    console.log("Form data", data);
  };

  return (
    <div className="h-screen w-full">
      <div className="flex h-full">
        {/* Left Side */}
        <div className="relative w-1/2 bg-gradient-to-b from-cyan-200 via-cyan-500 via-20% to-cyan-900  overflow-hidden">
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
                  <circle cx="16" cy="12" r="2" stroke="currentColor" strokeWidth="1" />
                </svg>
                <span className="text-2xl">Scribeo</span>
              </div>
              <span className="text-4xl font-bold">Welcome Back</span>
              <span className="text-lg opacity-90">sign in to continue your journey</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex items-center justify-center p-10">
          <SignInForm form={form} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
