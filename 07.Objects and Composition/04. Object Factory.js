function factory(library, orders) {

  return orders.map(({ template, parts  }) => {
      const methods = parts.reduce((acc, p) => {
          acc[p] = library[p];
          return acc
      }, {})

      methods.name = template.name
      return methods
  })
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
//   console.log(products);

  let index = products.findIndex(x => x.name === 'BoomBox Stereo')
  console.log(products[index].play('prodigy' , 'Breath'));


  