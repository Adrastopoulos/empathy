import { z } from "zod";

export const UserCreateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

export const EmotionSchema = z.object({
  faces: z.array(z.array(z.number().int().min(0).max(100)).length(7)),
});
