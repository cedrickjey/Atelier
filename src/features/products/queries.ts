import { cacheLife, cacheTag } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function getProducts() {
  "use cache"; // cache
  cacheLife("hours"); // cache
  cacheTag("products"); // cache

  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
}