const Cart = require('../src/Cart.js');
const expect = require('chai').expect;
const Item = require("../src/Item.js")
//Arrange

describe('Cart', () => {
    it('should initialize as empty', () => {

//Act

        const cart = new Cart()
//Assert
        expect(cart.items).to.deep.equal([])
        expect(cart.totalPrice).to.be.equal(0)
    })


it('When add item ,reflect the sum of all items' , () =>{
    //Arrange
    const cart = new Cart()
    const item1 = new Item('Handbag', 500,true);
   
//Act

 cart.addItem(item1,1);
//Assert
//console.log(item)
expect(cart.totalPrice).to.be.equal(500);

})

it('show the number of items I have added.' , () =>{

    const cart = new Cart()
    const item1 = new Item('Handbag', 500,true);
    const item2 = new Item('Watch', 5000,true);

    cart.addItem(item1,2);
    cart.addItem(item2,4);

    expect(cart.itemQuantities()).to.deep.equal([
        'Handbag - x2', 
        'Watch - x4'
    ]); 
})

it('  The items I have added along with their price and quantity..' , () =>{
    const cart = new Cart()

    const item1 = new Item('Handbag', 500,true);
    const item2 = new Item('Watch', 40000,true);

    cart.addItem(item1,1);
    cart.addItem(item2,2);

    expect(cart.itemizedList()).to.deep.equal([
        'Handbag x1 - $500', 
        'Watch x2 - $40000'
    ])


})
it('reflect both the item price and quantity.' , () =>{
    const cart = new Cart()

    const item1 = new Item('Handbag', 500,true);
    const item2 = new Item('Watch', 80000,true);


    cart.addItem(item1,1);
    cart.addItem(item2,4);

    expect(cart.itemizedList()).to.deep.equal([
        'Handbag x1 - $500', 
        'Watch x4 - $80000'
    ])
})
    it('I expect onSaleItems() to include only the items on sale.' , () =>{

        const cart = new Cart()

        const item1 = new Item('Handbag', 500,true);
        const item2 = new Item('Watch', 20000,false);
        const item3 = new Item('Rolax', 50000,true);

        cart.addItem(item1,1);
        cart.addItem(item2,2);
        cart.addItem(item3,1);

        expect(cart.onSaleItems()).to.deep.equal(
            [
                'Handbag x1 - 250', 
                'Rolax x1 - 25000'
            ])
})
})
