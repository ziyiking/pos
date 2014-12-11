function printInventory(tags){
  var cartItems = CartItems.getCartItems(tags);
  var promotion = Promotion.getGlobalPromotions(cartItems);
  var inventoryText = Inventory.getInventoryText(cartItems);
  console.log(inventoryText);
}
