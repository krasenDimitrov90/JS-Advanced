class Point {
    constructor(x, y) {
        this.x = x,
        this.y = y
    }
    static distance(coordinate1 , coordinate2) {
        let distanceX = (coordinate1.x - coordinate2.x) ** 2;
        let distanceY = (coordinate1.y - coordinate2.y) ** 2;
        return Math.sqrt(distanceX + distanceY)
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
