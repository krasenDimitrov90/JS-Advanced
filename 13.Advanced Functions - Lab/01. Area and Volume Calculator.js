function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    // let result = [];
    // let coordinates = JSON.parse(input);
    // for (let points of coordinates) {
    //     let obj = {
    //         area: area.call(points),
    //         volume: vol.call(points)
    //     };
    //     result.push(obj)
    // }
    // return result;

    return JSON.parse(input)
        .map(el => {
        return {
            area: area.call(el),
            volume: vol.call(el)
        }
    });
    
}


solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)