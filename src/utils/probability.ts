// Probability utility functions

export const factorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

export const combinations = (n: number, k: number): number => {
  if (k > n || k < 0) return 0;
  return factorial(n) / (factorial(k) * factorial(n - k));
};

export const binomialProbability = (n: number, k: number, p: number): number => {
  return combinations(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
};

export const normalPDF = (x: number, mean: number, stdDev: number): number => {
  const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
  const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2));
  return coefficient * Math.exp(exponent);
};

export const normalCDF = (x: number, mean: number, stdDev: number): number => {
  // Approximation using error function
  const z = (x - mean) / (stdDev * Math.sqrt(2));
  return 0.5 * (1 + erf(z));
};

// Error function approximation
function erf(x: number): number {
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);

  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
}

export const poissonProbability = (k: number, lambda: number): number => {
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
};

export const exponentialPDF = (x: number, lambda: number): number => {
  if (x < 0) return 0;
  return lambda * Math.exp(-lambda * x);
};

export const uniformPDF = (x: number, min: number, max: number): number => {
  if (x < min || x > max) return 0;
  return 1 / (max - min);
};

export const bayesTheorem = (
  priorA: number,
  likelihoodBGivenA: number,
  likelihoodBGivenNotA: number
): number => {
  const priorNotA = 1 - priorA;
  const marginalB = likelihoodBGivenA * priorA + likelihoodBGivenNotA * priorNotA;
  if (marginalB === 0) return 0;
  return (likelihoodBGivenA * priorA) / marginalB;
};
