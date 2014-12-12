function printInventory(tags){
  var cartItems = CartItems.getCartItems(tags);
  var inventoryText = new Inventory(cartItems);
  console.log(inventoryText.getInventoryText());
}
