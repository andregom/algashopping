export const selectAllProducts = state => state.products
export const selectSelectedProducts = state => state.products.filter(product => product.checked)
export const selectSelectedProductsTotalPrice = state => state.products
    .filter(product => product.checked)
    .reduce((totalCost, product) => totalCost + product.price, 0)