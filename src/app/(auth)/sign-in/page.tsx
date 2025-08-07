"use client";

import React from "react";

import { signInSchema, TSignInSchema } from "@/lib/validators/auth";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { GithubLogoIcon } from "@phosphor-icons/react";

import { Separator } from "@/components/ui/separator";

import Noise from "@/components/Noise";

const SignInPage = () => {
  const form = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),

    defaultValues: {
      email: "",

      password: "",
    },
  });

  const handleSubmit = (data: TSignInSchema) => {
    console.log("Form data", data);
  };

  return (
    <div className="h-screen w-full">
      <div className="flex h-full p-2">
        {/* Left Side */}
        <div className="relative w-1/2 bg-gradient-to-b from-cyan-200 via-cyan-500 via-20% to-cyan-900 rounded-4xl overflow-hidden">
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

        <div className="w-1/2 flex items-center justify-center p-10">
          <form
            className="space-y-6 max-w-md w-full"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <h2 className="text-3xl font-bold text-center">Sign Up</h2>

            <div className="flex gap-4 w-full">
              <Button
                variant="secondary"
                className="flex-1 flex items-center justify-center gap-2 shadow-md hover:shadow-none cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="-0.5 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                    fill="#EB4335"
                  />
                  <path
                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                    fill="#34A853"
                  />
                  <path
                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                    fill="#4285F4"
                  />
                </svg>
                Google
              </Button>

              <Button
                variant="secondary"
                className="flex-1 flex items-center justify-center gap-2 shadow-md hover:shadow-none cursor-pointer"
              >
                <GithubLogoIcon className="h-5 w-5" />
                GitHub
              </Button>
            </div>

            <div className="flex items-center gap-4 w-full">
              <Separator className="flex-1" />

              <span className="text-sm text-muted-foreground">or</span>

              <Separator className="flex-1" />
            </div>

            {/* Name Fields */}

            <div className="flex gap-4 w-full">
              <div className="flex-1">
                <label className="block text-sm text-muted-foreground mb-2">
                  First Name
                </label>

                <Input
                  type="text"
                  placeholder="eg: Sarah"
                  className="focus-visible:ring-1 focus-visible:ring-offset-0"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm text-muted-foreground mb-2">
                  Last Name
                </label>

                <Input
                  type="text"
                  placeholder="eg: Palin"
                  className="focus-visible:ring-1 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <Input
              type="text"
              placeholder="Email"
              className="focus-visible:ring-1 focus-visible:ring-offset-0"
              {...form.register("email")}
            />

            <Input
              type="password"
              placeholder="Password"
              className="focus-visible:ring-1 focus-visible:ring-offset-0"
              {...form.register("password")}
            />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
