import { z } from "zod";

export const signInSchema = z.object({
  email: z.email({
    message: "Please enter a valid email",
  }),
  password: z.string().min(1, {
    message: "Password is Required",
  }),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
