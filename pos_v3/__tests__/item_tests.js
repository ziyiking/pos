jest.dontMock('../src/model/item.js');
describe('Item',function() {
  describe('all',function() {
    it('should return all item',function() {
      var Item = require('../src/model/item.js');
      var result = Item.all();

       expect(result).toEqual(
         [new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'),
         new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'),
         new Item('ITEM000001', '雪碧', '瓶', 3.00, ''),
         new Item('ITEM000007', '果粒橙', '瓶', 3.50, ''),
         new Item('ITEM000002', '云山苹果', '斤', 5.50, '云山'),
         new Item('ITEM000003', '云山荔枝', '斤', 15.00, '云山'),
         new Item('ITEM000004', '电池', '个', 2.00, ''),
         new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'),
         new Item('ITEM000008', '康师傅冰红茶', '瓶', 3.00, '康师傅'),
         new Item('ITEM000006', '羽毛球', '个', 1.00, '')]);
    });
  });
});
