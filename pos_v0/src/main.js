function printInventory(items) {
   for(var i = 0; i < items.length; i++) {
     var item = items[i];
   }

  var inventoryText =
    '***<没钱赚商店>购物清单***\n' +
    '名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n' +
    '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
    '名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n' +
    '----------------------\n' +
    '总计：23.00(元)\n' +
    '**********************';
    
  console.log(inventoryText)
}
