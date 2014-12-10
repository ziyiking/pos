function Inventory(cart) {
  this.cart = cart;
}

Inventory.getInventoryText = function(cartItems) {
  var currTime = moment().format('YYYY年MM月DD日 HH:mm:ss');
  var globalPromotions = getGlobalPromotions(cartItems);

  inventoryText = '***<没钱赚商店>购物清单***\n';
  inventoryText += '打印时间：'+currTime+'\n';
  inventoryText += '----------------------\n';
  inventoryText += getCartItemsText(cartItems,globalPromotions);
  inventoryText += '----------------------\n';
  inventoryText += '挥泪赠送商品：\n';
  inventoryText += getPromotionsText(globalPromotions);
  inventoryText += '----------------------\n';

  var totalPrices = getTotalPrices(cartItems);

  var promotionPrice = getPromotionPrice(globalPromotions);

  inventoryText += '总计：' + (totalPrices - promotionPrice).toFixed(2) + '(元)\n';
  inventoryText += '节省：' + promotionPrice.toFixed(2) + '(元)\n';
  inventoryText += '**********************';


  return inventoryText;
}
