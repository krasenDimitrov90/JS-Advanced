function solve() {

   let addButonsElements = document.querySelectorAll('.add-product');
   let textAreaElement = document.querySelector('textarea')
   let products = {};
   let addButonsElementsArr = Array.from(addButonsElements);

   addButonsElementsArr.forEach(el => {
      el.addEventListener('click', function (e) {
         let productTypeElement = e.currentTarget.parentNode.parentNode.querySelector('.product-title');
         let productPricesElement = e.currentTarget.parentNode.parentNode.querySelector('.product-line-price');
         let product = productTypeElement.textContent;
         let price = Number(productPricesElement.textContent);
         
         if (!products.hasOwnProperty(product)) {
            products[product] = 0;
         }
         products[product] += price;
         textAreaElement.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`
         
      })
   })

   let chekOutButtonElement = document.querySelector('.checkout')
   chekOutButtonElement.addEventListener('click' , function (e) {

      let totalPrice = Object.values(products).reduce((acc , x) => acc + x ,0)
      let keys = Object.keys(products);
      let result = `You bought ${keys.join(', ')} for ${totalPrice.toFixed(2)}.`;
      textAreaElement.textContent += result;
      chekOutButtonElement.setAttribute('disabled', true);
      addButonsElementsArr.forEach(el => el.setAttribute('disabled', true));
   })
}