"use client";

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { TSignUpSchema } from "@/lib/validators/authValidator";
import Image from "next/image";
import LoaderSmall from "../small-loader";

interface SignUpFormProps {
  form: UseFormReturn<TSignUpSchema>;
  onSubmit: (data: TSignUpSchema) => void;
  isPending: boolean;
}

const SignUpForm = ({ form, onSubmit, isPending }: SignUpFormProps) => {
  return (
    <Form {...form}>
      <form
        className="space-y-6 max-w-md w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>

        {/* OAuth */}
        <div className="flex gap-4 w-full">
          <Link href="/api/auth/google?redirectTo=/scribe" className="flex-1">
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center gap-2 shadow-md hover:shadow-none cursor-pointer"
              type="button"
            >
              <Image src={'/google-color-svgrepo-com.svg'} alt="Google" height={20} width={20} />
              <span>Google</span>
            </Button>
          </Link>
          <Link href="/api/auth/github?redirectTo=/scribe" className="flex-1">
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center gap-2 shadow-md hover:shadow-none cursor-pointer"
              type="button"
            >
              <Image src={'/github-142-svgrepo-com.svg'} alt="Github" height={20} width={20}/>
              <span>GitHub</span>
            </Button>
          </Link>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-4 w-full">
          <Separator className="flex-1" />
          <span className="text-sm text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>

        {/* First + Last Name */}
        <div className="flex gap-4 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Sarah"
                    {...field}
                    autoComplete="given-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Palin"
                    {...field}
                    autoComplete="family-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="sarah@example.com"
                  {...field}
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••••"
                  {...field}
                  autoComplete="new-password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••••"
                  {...field}
                  autoComplete="new-password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button type="submit" className="w-full cursor-pointer" disabled={isPending}>
          {isPending ? <LoaderSmall/> : "Sign Up"}
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
