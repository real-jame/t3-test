import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const transactionsRouter = createTRPCRouter({
  getMany: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.transaction.getMany();
  }),
});
