const ExchangeRates = {
  USDKGS: 89,
  EURKGS: 100,
  KGSUSD: 0.12,
}

export const getExchangeRate = (from, to ) => {
  return ExchangeRates[from + to];
}