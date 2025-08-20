import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z.string().min(1, {
    message: "Password is Required",
  }),
});

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name is required." })
      .regex(/^[A-Za-z\s'-]+$/, { message: "only characters are allowed" }),
    lastName: z
      .string()
      .min(1, { message: "Last name is required." })
      .regex(/^[A-Za-z\s'-]+$/, { message: "only characters are allowed" }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

export type TSignInSchema = z.infer<typeof signInSchema>;
export type TSignUpSchema = z.infer<typeof signUpSchema>;
