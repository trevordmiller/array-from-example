'use strict';

var products = Array.from(document.querySelectorAll('.product'));

products.filter(function (product) {
  return parseFloat(product.innerHTML) < 10;
}).forEach(function (product) {
  return product.style.color = 'red';
});

//# sourceMappingURL=index.js.map