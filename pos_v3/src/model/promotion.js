function Promotion(name,discountrate) {
  this.name = name;
  this.discountrate = discountrate;
}

Promotion.brands = function() {
  return[
        new Promotion('可口可乐',0.9)
        ];
};

Promotion.items = function() {
  return [
    new Promotion('可口可乐',0.95)
  ];
};
