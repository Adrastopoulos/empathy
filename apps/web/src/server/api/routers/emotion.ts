import { EmotionSchema } from "../schemas";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const emotionRouter = createTRPCRouter({
  get: publicProcedure.query(async ({ ctx }) => {
    return fetch("https://ea77-128-237-82-8.ngrok.io/")
      .then((res) => res.json())
      .then((data) => EmotionSchema.parse(data));
  }),
});
