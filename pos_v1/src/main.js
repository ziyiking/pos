function printInventory(tags){
  var cartItems = getCartItems(tags);

  var inventoryText = getInventoryText(cartItems);

  console.log(inventoryText);
}

function getCartItems(tags){
  var cartItems = [];
  var allItems = loadAllItems();
  for(var i = 0; i < tags.length; i++){
    var tagArray = tags[i].split("-");
    var barcode = tagArray[0];
    var count = 1;
    if (tagArray[1]) {
      count = parseFloat(tagArray[1]);
    }

    var cartItem = _.find(cartItems, function(cartItem){
      return barcode === cartItem.item.barcode;
    });
    if (cartItem) {
      cartItem.count += count;
    } else {
      var item = _.find(allItems, function(item){
        return barcode === item.barcode;
      });
      cartItems.push({item : item, count : count});
    }
  }
  return cartItems;
}

function getInventoryText(cartItems){

  var globalPromotions = getGlobalPromotions(cartItems);

  inventoryText = '***<没钱赚商店>购物清单***\n';
  inventoryText += getCartItemsText(cartItems,globalPromotions);
  inventoryText += '----------------------\n';
  inventoryText += '挥泪赠送商品：\n';
  inventoryText += getPromotionsText(globalPromotions);
  inventoryText += '----------------------\n' ;

  var totalPrices = getTotalPrices(cartItems);

  var promotionPrice = getPromotionPrice(globalPromotions);

  inventoryText += '总计：' + (totalPrices - promotionPrice).toFixed(2) + '(元)\n';
  inventoryText += '节省：' + promotionPrice.toFixed(2) + '(元)\n' ;
  inventoryText += '**********************';


  return inventoryText;
}

function getGlobalPromotions(cartItems){
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
  }
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
