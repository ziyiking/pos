function Inventory(cartItems) {
  this.cartItems = cartItems;
}

Inventory.prototype.getInventoryText = function() {
  var currTime = moment().format('YYYY年MM月DD日 HH:mm:ss');
  var globalPromotions = Promotion.getGlobalPromotions(this.cartItems);

  inventoryText = '***<没钱赚商店>购物清单***\n';
  inventoryText += '打印时间：'+currTime+'\n';
  inventoryText += '----------------------\n';
  inventoryText += getCartItemsText(this.cartItems,globalPromotions);
  inventoryText += '----------------------\n';
  inventoryText += '挥泪赠送商品：\n';
  inventoryText += getPromotionsText(globalPromotions);
  inventoryText += '----------------------\n';

  var totalPrices = getTotalPrices(this.cartItems);

  var promotionPrice = getPromotionPrice(globalPromotions);

  inventoryText += '总计：' + (totalPrices - promotionPrice).toFixed(2) + '(元)\n';
  inventoryText += '节省：' + promotionPrice.toFixed(2) + '(元)\n';
  inventoryText += '**********************';


  return inventoryText;
};
