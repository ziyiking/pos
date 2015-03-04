function main(){
  var tag = [ { 'ITEM000000' : 20 },
              { 'ITEM000010' : 30 },
              { 'ITEM000001' : 30 },
              { 'ITEM000007' : 25 },
              { 'ITEM000003' : 8  },
              { 'ITEM000002' : 14 }];

  var scanner = new Scanner();
  var cartItems = scanner.addCartItems(tag);
  var shoppinglist = new shoppinglist();
  var discountmethod = 4;
  var print = shoppinglist.printInventory(cartItems,discountmethod);
  console.log(print);
}
main();
