export function priceFormat(price_in_cents: number) {
    const convertedPrice = price_in_cents / 100
    return new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: 'BRL',
    }).format(convertedPrice)
}