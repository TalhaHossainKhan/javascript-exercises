const reverseString = function(string) {
    const arrayString = []
    for (i = 0; i < string.length; i++){
        arrayString[i] = string[i]
    }

    let output = ""
    for (i = arrayString.length - 1; i > -1; i--){
        output = `${output}${arrayString[i]}`
    }

    return output

};

// Do not edit below this line
module.exports = reverseString;
