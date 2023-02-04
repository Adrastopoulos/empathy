import { EmotionSchema } from "../schemas";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const emotionRouter = createTRPCRouter({
  get: publicProcedure.query(async ({ ctx }) => {
    const { data } = await ctx.axios.get(
      "https://api.github.com/repos/trpc/trpc"
    );
    return EmotionSchema.parse(data);
  }),
});
