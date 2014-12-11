function CartItems(items,count) {
  this.items = items;
  this.count = count;
}

CartItems.getCartItems = function (tags){
  var cartItems = [];
  var allItems = loadAllItems();
  for(var i = 0; i < tags.length; i++){
    var tagArray = tags[i].split("-");
    var barcode = tagArray[0];
    var count = 1;
    if (tagArray[1]) {
      count = parseFloat(tagArray[1]);
    }

    var cartItem = _.find(cartItems, function(cartItem) {
      return barcode === cartItem.item.barcode;
    });
    if (cartItem) {
      cartItem.count += count;
    } else {
      var item = _.find(allItems, function(item) {
        return  item.barcode === barcode;
      });
      cartItems.push({item : item, count : count});
    }
  }
  return cartItems;
};
