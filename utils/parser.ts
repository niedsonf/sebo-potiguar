export class Parser {
    static toMaskedTell(tell: string) {
        if (tell.length === 10) {
            return `(${tell.slice(0, 2)}) ${tell.slice(2, 6)}-${tell.slice(6, 10)}`
        } else if (tell.length === 11) {
            return `(${tell.slice(0, 2)}) ${tell.slice(2, 7)}-${tell.slice(7, 11)}`
        }
        return tell
    }

    static toDate(date: string, withHours: boolean = false) {
        return date
            ? new Date(date).toLocaleDateString('pt-br', {
                timeZone: 'UTC',
                hour: withHours ? '2-digit' : undefined,
                minute: withHours ? '2-digit' : undefined,
                second: withHours ? '2-digit' : undefined
            })
            : ''
    }

    static toCurrency(value: number) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }
}