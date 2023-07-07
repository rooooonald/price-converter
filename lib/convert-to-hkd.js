export default function convertToHkd(prices) {
  const HKD_RATE = 6;
  return {
    lb: prices.lb * HKD_RATE,
    kg: prices.kg * HKD_RATE,
    kati: prices.kati * HKD_RATE,
  };
}
