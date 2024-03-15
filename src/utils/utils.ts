export const formatCurrency = (value: number | string) => {
    if (!value || Number(value) < 0 || isNaN(Number(value))) {
        return null;
    }
    return new Intl.NumberFormat("ru", {
        style: "currency",
        currency: "EUR",
    }).format(Number(value));
};
