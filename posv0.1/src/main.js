function printInventory(items) {
  var itemsText = '';
  var sum = 0 ;
  var cartItems =[];
  var count = 1;
   for(var i = 0; i < items.length; i++) {
    var item = items[i];
    var cartItem;
    for(var j = 0; j < cartItems.length; j++ ){

      if(cartItems[j].item.barcode === item.barcode){
        cartItem = cartItems[j];
      }else{
        cartItem =null;
      }
    }
    if (cartItem){
      cartItem.count += count;
    }else{
      cartItems.push({'item':item,'count':count});
    }
  }

    for(var k = 0; k<cartItems.length; k++ ){
      var cartItem = cartItems[k];
      itemsText += '名称：' + cartItem.item.name +
          '，数量：' + cartItem.count + cartItem.item.unit +
          '，单价：' + cartItem.item.price.toFixed(2) +
          '(元)，小计：' + (cartItem.count * cartItem.item.price).toFixed(2) +
          '(元)\n';
      sum += cartItem.count * cartItem.item.price;
  }

  var inventoryText =
  '***<没钱赚商店>购物清单***\n' +
  itemsText +
  '----------------------\n' +
  '总计：' + sum.toFixed(2) + '(元)\n' +
  '**********************';

  console.log(inventoryText);
}
