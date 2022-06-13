function strLengthSum(str1 , str2 ,str3) {
    let num1 = Number(str1.length);
    let num2 = Number(str2.length);
    let num3 = Number(str3.length);
    console.log(num1 + num2 + num3);
    console.log(Math.floor((num1 + num2 + num3) / 3));

}


strLengthSum('chocolate', 'ice cream', 'cake')