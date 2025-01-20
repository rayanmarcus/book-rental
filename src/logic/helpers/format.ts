export class FormatHelper {
  static formatMoney(value: number | string): string {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  static formatDateString(value: string | Date): string {
    const date = new Date(value)
    return date.toLocaleDateString('pt-BR', {
      timeZone: 'UTC',
    })
  }
}
