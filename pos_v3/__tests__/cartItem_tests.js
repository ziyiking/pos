jest.dontMock('lodash');
jest.dontMock('../src/model/item.js');
jest.dontMock('../src/model/cartItem.js');


describe('CartItem',function() {
  describe('#getCartItemText',function() {
    it('should return about Commodity information',function() {
      var Item = require('../src/model/item.js');
      var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
      var CartItem = require('../src/model/cartItem.js');
      var cartItems = new CartItem(item,20);
      var result = cartItems.getCartItemText();
      expect(result).toEqual('名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n');
     });
  });
});
