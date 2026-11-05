import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Prisma } from "../src/generated/prisma/client";
import { setDefaultAutoSelectFamily } from "node:net";


const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

const products: Prisma.ProductCreateInput[] = [
  {
    slug: "costume-trois-pieces-marine",
    name: "Costume trois pièces marine",
    description: "Laine italienne, coupe ajustée, doublure en soie.",
    priceInCents: 85000,
    category: "costume",
    audience: "homme",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    madeToMeasure: true,
  },
  {
    slug: "robe-de-soiree-emeraude",
    name: "Robe de soirée émeraude",
    description: "Satin de soie, dos ouvert, finitions cousues main.",
    priceInCents: 62000,
    category: "robe",
    audience: "femme",
    images: [],
    sizes: ["XS", "S", "M", "L"],
    madeToMeasure: true,
  },
  {
    slug: "chemise-popeline-blanche",
    name: "Chemise en popeline blanche",
    description: "Coton égyptien, col italien, boutons en nacre.",
    priceInCents: 18000,
    category: "chemise",
    audience: "homme",
    images: [],
    sizes: ["S", "M", "L", "XL", "XXL"],
    madeToMeasure: false,
  },
  {
    slug: "chemise-popeline-roge",
    name: "Chemise en popeline rouge",
    description: "Coton égyptien, col italien, boutons en nacre.",
    priceInCents: 16000,
    category: "chemise",
    audience: "homme",
    images: [],
    sizes: ["S", "M", "L", "XL", "XXL"],
    madeToMeasure: true,
  },
  {
    slug: "Robe-popeline-blanche",
    name: "Robe en popeline blanche",
    description: "Coton Indien, col italien, boutons en nacre.",
    priceInCents: 20000,
    category: "chemise",
    audience: "femme",
    images: [],
    sizes: ["S", "M", "L", "XL", "XXL"],
    madeToMeasure: false,
  },
   {
    slug: "Manteau-popeline-noir",
    name: "anteau en popeline noir",
    description: "Coton Indien, col italien, boutons en nacre.",
    priceInCents: 17000,
    category: "manteau",
    audience: "femme",
    images: [],
    sizes: ["S", "M", "L", "XL", "XXL"],
    madeToMeasure: true,
  },
  {
    slug: "Manteau-popeline-noir",
    name: "Manteau en popeline noir",
    description: "Coton Indien, col italien, boutons en nacre.",
    priceInCents: 17000,
    category: "manteau",
    audience: "homme",
    images: [],
    sizes: ["S", "M", "L", "XL", "XXL"],
    madeToMeasure: false,
  },
  {
    slug: "Accesoire",
    name: "Accesoire",
    description: "Coton Indien, col italien, boutons en nacre.",
    priceInCents: 17000,
    category: "accessoire",
    audience: "homme",
    images: [],
    sizes: ["S", "M", "L", "XL", "XXL"],
    madeToMeasure: true,
  },
];

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }
  console.log(`Seed terminé : ${products.length} produits`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

  // Connexion lente vers Neon (latence élevée) : on laisse Node attendre la réponse
  setDefaultAutoSelectFamily(false);