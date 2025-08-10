"use client";

import React from "react";

import { signInSchema, TSignInSchema } from "@/lib/validators/auth";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

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
      <div className="flex h-full">
        {/* Left Side */}
        <div className="relative w-1/2 bg-gradient-to-b from-cyan-200 via-cyan-500 via-20% to-cyan-900 overflow-hidden">
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
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-xs"
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
                <span className="text-shadow-xs">Google</span>
              </Button>

              <Button
                variant="secondary"
                className="flex-1 flex items-center justify-center gap-2 shadow-md hover:shadow-none cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-xs"
                >
                  <path
                    d="M10,1 C15.523,1 20,5.59 20,11.253 C20,15.782 17.138,19.624 13.167,20.981 C12.66,21.082 12.48,20.762 12.48,20.489 C12.48,20.151 12.492,19.047 12.492,17.675 C12.492,16.719 12.172,16.095 11.813,15.777 C14.04,15.523 16.38,14.656 16.38,10.718 C16.38,9.598 15.992,8.684 15.35,7.966 C15.454,7.707 15.797,6.664 15.252,5.252 C15.252,5.252 14.414,4.977 12.505,6.303 C11.706,6.076 10.85,5.962 10,5.958 C9.15,5.962 8.295,6.076 7.497,6.303 C5.586,4.977 4.746,5.252 4.746,5.252 C4.203,6.664 4.546,7.707 4.649,7.966 C4.01,8.684 3.619,9.598 3.619,10.718 C3.619,14.646 5.954,15.526 8.175,15.785 C7.889,16.041 7.63,16.493 7.54,17.156 C6.97,17.418 5.522,17.871 4.63,16.304 C4.63,16.304 4.101,15.319 3.097,15.247 C3.097,15.247 2.122,15.234 3.029,15.87 C3.029,15.87 3.684,16.185 4.139,17.37 C4.139,17.37 4.726,19.2 7.508,18.58 C7.513,19.437 7.522,20.245 7.522,20.489 C7.522,20.76 7.338,21.077 6.839,20.982 C2.865,19.627 0,15.783 0,11.253 C0,5.59 4.478,1 10,1"
                    fill="#000000"
                  />
                </svg>
                <span className="text-shadow-xs">GitHub</span>
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
