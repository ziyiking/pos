jest.dontMock('../src/model/reduce.js');
jest.dontMock('lodash');

describe('Reduce',function() {
  var Reduce,commonCartItems,conditions,reduceMoney;
  beoforeEach(function() {
    Reduce = require('../src/model/reduce.js');
    getPrice = jest.genMockFn();
    getPrice.mockReturnValue(15);
    commonCartItems = [{'item':
                        {'barcode' :'ITEM000003',
                        'name' : '斤',
                        'unit' : '瓶',
                        'price' : 15.00,
                        'brand' : '云山'},
                        'count' : 12,
                        'promotion' : true,
                        // getPrice : getPrice}];
                      }];
    conditions = 100;
    reduceMoney = 3;
  });

  describe(',calculateSaveMoney',function() {
    it('should retrun savemoney',function() {
      var result = Reduce.calcalateSaveMoney(commonCartItems,conditions,reduceMoney);
      expect(result).toBe(3);
    });
  });

  describe(',getAllsuperReduceText',function() {
    it('should return savemoney information',function() {
      var result = Reduce.getALLsuperReduceText(commonCartItems,conditions,reduceMoney);
      expect(result).toBe('名称：满100减3，金额：3.00元\n') ;
    });
  });
});
