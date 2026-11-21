export type CostPrices = { scorerInput: number; scorerOutput: number; writerInput: number; writerOutput: number }
export function estimateCost(tokens: { input: number; output: number }, inputPrice: number, outputPrice: number): number {
  return tokens.input * inputPrice / 1_000_000 + tokens.output * outputPrice / 1_000_000
}
export function canSpend(spent: number, estimate: number, limit: number): boolean { return spent + estimate <= limit }
