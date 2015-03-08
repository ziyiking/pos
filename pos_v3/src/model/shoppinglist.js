var _ = require('lodash');
var moment = require('moment');
var Discountmethod = require('./discountmethod.js');

function ShoppingList () {

}

ShoppingList.prototype.getCartItemsList = function (cartItems) {
  var cartItemsList = '';
  _.forEach(cartItems, function(cartItem) {
    cartItemsList += cartItem.getCartItemText();
  });

  return cartItemsList;
};

ShoppingList.prototype.getPromotionList = function (cartItems, DiscountmethodType) {
  var promotionList = '';
  switch (DiscountmethodType) {
    case 1 :
      promotionList += Discountmethod.getDiscountmethodOne(cartItems);
      break;

      case 2 :
        promotionList += Discountmethod.getDiscountmethodTwo(cartItems);
        break;

        case 3 :
          promotionList += Discountmethod.getDiscountmethodThree(cartItems);
          break;

          case 4 :
            promotionList += Discountmethod.getDiscountmethodFour(cartItems);
            break;

            default :
            promotionList += '没有优惠商品。';
          }
          return promotionList;
        };

        ShoppingList.prototype.getSaveMoney = function (cartItems) {
          var saveMoney = 0;
          _.forEach(cartItems, function (cartItem) {
            saveMoney += cartItem.saveMoney;
          });
          return saveMoney;
        };

        ShoppingList.prototype.getSaveMoneyText = function (cartItems) {
          return '节省：' + this.getSaveMoney(cartItems).toFixed(2) + '(元)\n';
        };

        ShoppingList.prototype.getTotalMoney = function (cartItems) {
          var totalMoney = 0;
          _.forEach(cartItems, function (cartItem) {
            totalMoney += cartItem.getSubTotal();
          });

          totalMoney -= this.getSaveMoney(cartItems);
          return totalMoney;
        };

        ShoppingList.prototype.getTotalMoneyText = function (cartItems) {
          return '总计：' + this.getTotalMoney(cartItems).toFixed(2) + '(元)\n';
        };

        ShoppingList.prototype.printInventory = function (cartItems, DiscountmethodType) {
          var print ='***<没钱赚商店>购物清单***\n' + '打印时间：' +
          moment().format('YYYY年MM月DD日 HH:mm:ss') +
          '\n\n----------------------\n' +
          this.getCartItemsList(cartItems) +
          '\n----------------------\n' + '优惠信息：\n' +
          this.getPromotionList(cartItems, DiscountmethodType) +
          '\n----------------------\n' +
          this.getTotalMoneyText(cartItems) +
          this.getSaveMoneyText(cartItems) +
          '**********************\n';
          return print;
        };

        module.exports = ShoppingList;
