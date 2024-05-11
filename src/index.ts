const dictionary = require("./dictionary.json");

const index = (serachWord) => {

    console.log(dictionary)

    function binary_search(key) {
        let searchLeft = 0;
        let searchRight = dictionary.length - 1;
        let half;

        while (searchLeft < searchRight) {
            half = Math.ceil((searchRight + searchLeft) / 2);
            if (key === dictionary[half].English) {
                console.log(dictionary[half].katakana)
                return dictionary[half].katakana
            } else if (key < dictionary[half].English) {
                searchRight = half;
            } else if (key > dictionary[half].English) {
                searchLeft = half;
            } else {
                console.log("なし");
                return "該当なし"
            }
        }
    }
    binary_search(serachWord);
}

module.exports = index;
