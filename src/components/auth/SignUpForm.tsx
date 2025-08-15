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

interface SignUpFormProps {
  form: UseFormReturn<TSignUpSchema>;
  onSubmit: (data: TSignUpSchema) => void;
  isPending: boolean;
  error: string | null;
}

const SignUpForm = ({ form, onSubmit, isPending, error }: SignUpFormProps) => {
  return (
    <Form {...form}>
      <form className="space-y-6 max-w-md w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>

        <div className="flex gap-4 w-full">
          <Link href="/api/auth/google?redirectTo=/scribe" className="flex-1">
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center gap-2 shadow-md hover:shadow-none cursor-pointer"
            >
              {/* Google SVG */}
              <span className="text-shadow-xs">Google</span>
            </Button>
          </Link>
          <Link href="/api/auth/github?redirectTo=/scribe" className="flex-1">
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center gap-2 shadow-md hover:shadow-none cursor-pointer"
            >
              {/* GitHub SVG */}
              <span className="text-shadow-xs">GitHub</span>
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4 w-full">
          <Separator className="flex-1" />
          <span className="text-sm text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>

        <div className="flex gap-4 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Sarah" {...field} />
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
                  <Input placeholder="Palin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="sarah@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <p className="text-sm font-medium text-destructive">{error}</p>}

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
