import { env } from "~/env/server.mjs";
import { EmotionSchema } from "../schemas";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const emotionRouter = createTRPCRouter({
  get: publicProcedure.query(async ({ ctx }) => {
    return fetch(env.WEARABLE_API_URL)
      .then((res) => res.json())
      .then((data) => EmotionSchema.parse(data));
  }),
});
