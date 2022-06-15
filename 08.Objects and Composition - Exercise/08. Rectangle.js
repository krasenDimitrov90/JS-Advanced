function rectangle(width , height , color) {

    let newColor = color[0].toUpperCase() + color.slice(1);
    let rect = {
        width , 
        height , 
        color: newColor,
        calcArea: function () {
            return this.width * this.height;
        }
    }
    return rect;
}

//rectangle()

let rect = rectangle(4, 5, 'red');
    console.log(rect.width);
    console.log(rect.height);
    console.log(rect.color);
    console.log(rect.calcArea());