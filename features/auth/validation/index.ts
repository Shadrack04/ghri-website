import z, { number } from "zod";

export const userSetupFormSchema = z.object({
  fullName: z.string().min(5).max(50),
  email: z.email(),
  phone: z.string().min(5, "Message should be at least 5 characters long"),
  message: z.string().min(10, "Message should be at least 10 characters long"),
  dateOfBirth: z.number(),
  address: z.string().min(5),
  zipCode: z.number(),
});

export type userSetupFormType = z.infer<typeof userSetupFormSchema>;
