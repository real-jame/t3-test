import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const transactionsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.transaction.findMany();
  }),
});
