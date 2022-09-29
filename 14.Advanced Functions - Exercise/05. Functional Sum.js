// from internet

function add(num) {


    function iner(num2) {
        num += num2;

        return iner;
    }

    iner.toString = () => num;
    return iner;
}

console.log(add(1)(6)(-3).toString());