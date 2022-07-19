function Circle(radius) {
    this.radius = radius;
}
Object.defineProperty(Circle.prototype, 'area', {
    get: function() {
      return this.radius + 5;
    }
  });

  let c1 = new Circle(5);
  let c2 = new Circle(7);
  
  console.log(c1.area);
  console.log(c2.area);
  console.log(c1.area === c2.area);