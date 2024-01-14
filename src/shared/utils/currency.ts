export function formatCurrency(inputValue: string): string {
  let formattedValue = inputValue.replace(/\D/g, '')
  formattedValue = (Number(formattedValue) / 100).toFixed(2).replace('.', ',')
  return `R$ ${formattedValue}`
}
