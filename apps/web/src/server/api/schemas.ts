import { z } from "zod";

export const UserCreateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

// Add some randomness to the fields in post
export const EmotionSchema = z.object({
  age: z.number().int(),
  dominant_emotion: z.string(),
  dominant_gender: z.string(),
  dominant_race: z.string(),
  emotion: z.object({
    anger: z.number().min(0).max(100).default(0),
    disgust: z.number().min(0).max(100).default(0),
    fear: z.number().min(0).max(100).default(0),
    happy: z.number().min(0).max(100).default(0),
    neutral: z.number().min(0).max(100).default(0),
    sad: z.number().min(0).max(100).default(0),
    surprise: z.number().min(0).max(100).default(0),
  }),
  gender: z.object({
    Man: z.number().min(0).max(100),
    Woman: z.number().min(0).max(100),
  }),
  race: z.object({
    asian: z.number().min(0).max(100),
    black: z.number().min(0).max(100),
    indian: z.number().min(0).max(100),
    "latino hispanic": z.number().min(0).max(100),
    "middle eastern": z.number().min(0).max(100),
    white: z.number().min(0).max(100),
  }),
  region: z.object({
    h: z.number(),
    w: z.number(),
    x: z.number(),
    y: z.number(),
  }),
});
