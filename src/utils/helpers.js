export const abbreviateNumber = (number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short",
  }).format(number);
