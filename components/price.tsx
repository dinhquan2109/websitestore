const LOCALE = "vi-VN";

const Price = ({
  amount,
  className,
  currencyCode = "VND",
  currencyCodeClassName: _ignored,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => {
  const fractionDigits = currencyCode === "VND" ? 0 : 2;
  const formatted = new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(parseFloat(amount));

  return (
    <p suppressHydrationWarning={true} className={className}>
      {formatted}
    </p>
  );
};

export default Price;
