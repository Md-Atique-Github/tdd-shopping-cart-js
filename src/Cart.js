module.exports = class Cart {
    constructor() {
        this.items = []
        this.totalPrice = 0;
    }



    addItem(cartItem, quantity) {
        const productItem = {
            cartItem: cartItem,
            quantity: quantity
        }

        this.items.push(productItem);
        this.totalPrice += productItem.cartItem.price * productItem.quantity;
    };

    itemQuantities() {
        return this.items.map((productItem => {
            return `${productItem.cartItem.name} - x${productItem.quantity}`
        }))
    }

    itemizedList(){
        return this.items.map((productItem => {
            return `${productItem.cartItem.name} x${productItem.quantity} - $${productItem.cartItem.price}`
        }))
    }

    //onSaleItems(){
    //    return this.items.filter((productItem =>{
    //        return `${productItem,cartItem.name} x${productItem.quantity} - $${productItem.cartItem.price}`
    //    }))
    //}

    onSaleItems() {
        let sele= this.items.filter(productItem => productItem.cartItem.onSale == true)
           let result=  sele.map (productItem =>{
                return `${productItem.cartItem.name} x${productItem.quantity} - ${((productItem.cartItem.price/ 2))}`;
    })
    return result;
    }

}
