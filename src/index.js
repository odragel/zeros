module.exports = function getZerosCount(number) {

    var biggestDivToFive = Math.floor(number / 5);
    var result = biggestDivToFive;
    for (var i = 0; i < biggestDivToFive; i++) {
        var temp = biggestDivToFive - i;
        if (temp % 5 == 0){
            var amountOfFives = 0;
            while(temp % 5 == 0){
                amountOfFives++;
                temp = temp / 5;
            }
            result=result + amountOfFives;
            i = i+4;
        }
    }
    return result;

}
