interface iAppProps {
  amount: number;
  currency: "USD" | "EUR" | "ZAR";
}

export function formatCurrency({ amount, currency }: iAppProps) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: currency,
  }).format(amount);
}
