import z from "zod";

export const formSchema = z.object({
  name: z.string().min(5).max(50),
  email: z.email(),
  subject: z.string().min(5, "Message should be at least 5 characters long"),
  message: z.string().min(10, "Message should be at least 10 characters long"),
});

export type FormType = z.infer<typeof formSchema>;
