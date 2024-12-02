export const adjustEquation = (equation: string): string => {
  const parts: string[] = equation.split("");
  const adjustedParts: string[] = parts.map((part, index) => {
    if (part === "x") {
      const prev = parts[index - 1];
      const next = parts[index + 1];
      if (prev && !isNaN(Number(prev))) {
        return `*x`;
      } else if (next && !isNaN(Number(next))) {
        return `x*${next}`;
      }
    }
    return part;
  });
  return adjustedParts.join("");
};
