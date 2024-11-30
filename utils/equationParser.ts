export const parseEquation = (equation: string, x: number): number => {
    try {
      const sanitized = equation.replace(/x/g, x.toString()).replace("^", "**");
      return eval(sanitized);
    } catch {
      throw new Error("Invalid equation");
    }
  };
  