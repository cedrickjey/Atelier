
import { Category,Audience,Size } from "@/generated/prisma/enums";
import type { Product }  from "@/generated/prisma/client"; 


// Point d'entrée unique : le reste du projet importe ses types d'ici
export { Category, Audience, Size };
export type { Product };

export type CartItem = Pick<Product, "id" | "slug" | "name" | "priceInCents"> & {
  size:Size; // la taille choisie par le client
  quantity:number;
};


export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error:string };

export type ProductUpdate = Partial<Product> & Pick<Product, "id">;


