function Promotion(type, barcodes) {
  this.type = type;
  this.barcodes = barcodes || [];
}

Promotion.getGlobalPromotions = function (cartItems){
  var globalPromotions = [];

  for(var i = 0; i<cartItems.length; i++){
    var promotions = loadPromotions();
    var promotion = _.find(promotions,{type:'BUY_TWO_GET_ONE_FREE'});

    var promotionBarcode = _.find(promotion.barcodes,function(promotionBarcode){
      return promotionBarcode === cartItems[i].item.barcode;
    });

    if (promotionBarcode) {
      globalPromotions.push({
        name : cartItems[i].item.name,
        number : parseInt(cartItems[i].count / 3),
        unit : cartItems[i].item.unit,
        price:cartItems[i].item.price});
      }
    }
    return globalPromotions;
  };

  function getPromotionPrice(globalPromotions){
    var promotionPrice = 0;
    for(var i = 0; i<globalPromotions.length; i++){
      promotionPrice += globalPromotions[i].number * globalPromotions[i].price;
    }

    return promotionPrice;
  }

  function getTotalPrices(cartItems){
    var totalPrices = 0;
    for(var i = 0; i<cartItems.length; i++){
      var item = cartItems[i].item;
      var count = cartItems[i].count;
      var price = cartItems[i].item.price;

      totalPrices += count*price;
    }

    return totalPrices;
  }

  function getCartItemsText(cartItems,globalPromotions){
    var text = '';
    for(var i = 0; i<cartItems.length; i++){

      var item = cartItems[i].item;
      var count = cartItems[i].count;
      var price = cartItems[i].item.price;

      var promotionCount = getPromotionCount(cartItems[i],globalPromotions);
      var paymentCount = count - promotionCount;

      var subtotal = promotionCount > 0 ? paymentCount * price
      : count * price;

      text += '名称：' + item.name +
      '，数量：' + count + item.unit +
      '，单价：' + price.toFixed(2) +
      '(元)，小计：'+ subtotal.toFixed(2) + '(元)\n';

    }
    return text;
  }

  function getPromotionsText(globalPromotions){
    var text = '';
    for(var i = 0; i < globalPromotions.length; i++){
      text += '名称：'+globalPromotions[i].name +
      '，数量：'+globalPromotions[i].number+ globalPromotions[i].unit + '\n';
    }
    return text;
  }

  function getPromotionCount(cartItem,globalPromotions){
    var promotionCount = 0;
    for(var i = 0; i<globalPromotions.length; i++){
      if(globalPromotions[i].name === cartItem.item.name){
        promotionCount = globalPromotions[i].number;
      }
    }

    return promotionCount;
  }
