function printInventory(tags){
  var cartItems = CartItems.getCartItems(tags);
  var inventoryText = new Inventory(cartItems);
//  var inventoryText = inventoryText.getInventoryText ;
  console.log(inventoryText.getInventoryText());
}
