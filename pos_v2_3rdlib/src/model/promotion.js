function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}

Promotion.getGlobalPromotions = function(cartItems){
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
