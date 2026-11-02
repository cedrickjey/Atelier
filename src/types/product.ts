export const CATEGORIES = ["costume", "robe", "chemise", "manteau", "accessoire"] as const;
export const AUDIENCES = ["homme","femme"] as const;
export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;


export type Category = (typeof CATEGORIES)[number];
export type Audience = (typeof AUDIENCES)[number];
export type Size = (typeof SIZES)[number];

export interface Product {
  id:string;
  slug:string; // pour l'URL, par exemple "costume-trois-pieces-marine"
  name:string;
  description:string;
  priceInCents:number; // 45000 = 450,00 €
  category:Category;
  audience:Audience;
  images:string[];
  sizes:Size[]; // tailles disponibles
  madeToMeasure:boolean; // commandable sur mesure ?
  createdAt:Date;
}

export type CartItem = Pick<Product, "id" | "slug" | "name" | "priceInCents"> & {
  size:Size; // la taille choisie par le client
  quantity:number;
};


export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error:string };

export type ProductUpdate = Partial<Product> & Pick<Product, "id">;


