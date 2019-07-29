function changeVocals(str) {

    var temp = ""

    for (var i = 0; i < str.length; i++) {

        if (str[i] == "a" || str[i] == "A") {
            if (str[i] == "A") {
                temp += "B"
            } else {
                temp += "b"
            }
        } else if (str[i] == "i" || str[i] == "I") {
            if (str[i] == "I") {
                temp += "J"
            } else {
                temp += "j"
            }
        } else if (str[i] == "u" || str[i] == "U") {
            if (str[i] == "U") {
                temp += "V"
            } else {
                temp += "v"
            }
        } else if (str[i] == "e" || str[i] == "E") {
            if (str[i] == "E") {
                temp += "F"
            } else {
                temp += "f"
            }
        } else if (str[i] == "o" || str[i] == "O") {
            if (str[i] == "O") {
                temp += "P"
            } else {
                temp += "p"
            }
        } else {
           temp += str[i]
        }

    }
    // console.log(temp)
    return temp;
}


function reverseWord(str) {

    var tmp = "";

    for (var i = str.length - 1; i >= 0; i--) {
        tmp += str[i]
    }

    return tmp;
}



function setLowerUpperCase(str) {

    var temp = "";

    var low = "abcdefghijklmnopqrstuvwxyz"
    var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (var i = 0; i < str.length; i++) {
        for (let j = 0; j < low.length; j++) {
            if (str[i] == low[j]) {
                temp += up[j]
            } else if (str[i] == up[j]) {
                temp += low[j]
            } else if (str[i] == " ") {
                temp += " "
                break;
            }
        }
    }

    return temp;
}


function removeSpaces(str) {

    var tmp = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            tmp += str[i]
        }
    }

    return tmp;
}


function passwordGenerator(name) {
    var changeVoc = changeVocals(name);
    var reverse = reverseWord(changeVoc);
    var setLowUp = setLowerUpperCase(reverse);
    var remove = removeSpaces(setLowUp);

    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    } else {
        return remove;
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
