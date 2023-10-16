export function numberWithCommas(x: any) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

export function formatCurrency(price: number, type: string = 'en-US') {
    return (price).toLocaleString(type, {
        style: 'currency',
        currency: 'USD',
    })
}


export function priceDiscount(price: number, discount: number, type: string = 'en-US') {
    let result: any = (price - (discount / 100 * price))
    return formatCurrency(result, type)
}
