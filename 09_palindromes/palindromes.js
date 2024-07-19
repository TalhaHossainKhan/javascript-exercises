palindromes = (string) => {
    let tempArray = []
    let tempChar = ""
    for (i = 0; i < string.length; i++){
        tempChar = string[i].toLowerCase()
        if (tempChar !== " " && tempChar !== "." && tempChar !== "," && tempChar !== "!"){
            tempArray.push(tempChar)
        }
    }

    let wordLength = Math.floor(tempArray.length / 2) + 1

    let tempWord1 = ""
    let tempWord2 = ""

    for (i = 0; i < wordLength; i++){
        tempWord1 = `${tempWord1}${tempArray[i]}`
    }

    for (i = tempArray.length - 1; i >= wordLength - 1; i--){
        tempWord2 = `${tempWord2}${tempArray[i]}`
    }

    console.log(tempWord1)
    console.log(tempWord2)
    console.log(tempArray)
    console.log(wordLength)

    if (tempWord1 == tempWord2){
        return true
    } else {
        return false
    }

}

let test = palindromes("Animal loots foliated detail of stool lamina.")
console.log(test)

// Do not edit below this line
module.exports = palindromes;
