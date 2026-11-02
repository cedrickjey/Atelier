const priceFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

export function formatPrice(priceInCents: number): string {
  return priceFormatter.format(priceInCents / 100);
}

