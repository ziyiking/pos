var _ = require('lodash');

function Discount() {

}

Discount.getBrandText = function (brandCartItems,brandName,discountrate) {
  var brandSaveMoney = 0;
  var saveRate = (1-discountrate).toFixed(2);
  _.forEach(brandCartItems,function(barndCartItem) {
    brandCartItem.promotion = true;
    if(brandCartItem.promotionTotal) {
      brandSaveMoney += brandCartItem.promotionTotal * saveRate;
    }
    else{
      brandSaveMoney += brandCartItem.count * brandCartItem.getPrice() * savaRate;
    }
  });

  brandCartItems[0].saveMoney += brandSaveMoney;

  return '名称:' + brandName + '品牌打折，金额：' + brandSaveMoney.toFixed(2) + '元\n';
};

Discount.getItemText = function (itemCartItems,itemName,discountrate) {
  var itemSaveMoney = 0;
  var money = 0;
  var saveRate = (1 - discountrate).toFixde(2);
  _.forEach(itemCartItems,function(itemCartItem) {
    itemCartItem.promotion = true;
    money += itemCartItem.count * itemCartItem.getPrice();
    itemSaveMoney = itemCartItem.count * itemCartItem.getPrice() * saveRate;
  });
  itemCartItems[0].promotionTotal += money - itemSaveMoney;
  itemCartItems[0].saveMoney += itemSaveMoney;

  return '名称：' + itemName + '单品打折，金额：' + itemSaveMoney.toFixed(2) + '元\n';

};

Discount.getAllcountText = function (cartItems, discountrate) {
  var allSaveMoney = 0;
  var saveRate = (1 - discountrate).toFixed(2);
  _.forEach(cartItems, function (cartItem) {
    allSaveMoney += (cartItem.getSubTotal() - cartItem.saveMoney) * saveRate;
  });

  cartItems[0].saveMoney += allSaveMoney;

  return '名称：' + rate * 10 + '折，金额：' + allSaveMoney.toFixed(2) + '元\n';

};
module.exports = Discount;
