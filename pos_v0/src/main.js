function printInventory(items) {
  var itemsText = '';
  var sum = 0 ;
  for(var i = 0; i < items.length; i++) {
    var item = items[i];

    itemsText += '名称：' + item.name +
                 '，数量：' + item.count + item.unit +
                 '，单价：' + item.price.toFixed(2) +
                 '(元)，小计：' + (item.count * item.price).toFixed(2) +
                 '(元)\n';
    sum += (item.count * item.price);
  }

  var inventoryText =
    '***<没钱赚商店>购物清单***\n' +
    itemsText +
    '----------------------\n' +
    '总计：' + sum.toFixed(2) + '(元)\n' +
    '**********************';

  console.log(inventoryText)
}
